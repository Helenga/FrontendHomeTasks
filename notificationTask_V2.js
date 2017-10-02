function App() {

    // создание новго сервиса рассылки
    var notifier = createNotificationService();

    // создание 2 разных каналов
    var channel1 = notifier.createChannel('channel1');
    var channel2 = notifier.createChannel('channel2');
    // создание callback-параметров

    var lastOnly = function(subscriptions) {
        var sortedMessages = [];
        subscriptions.map(function(channel) {
            sortedMessages.push(channel.messages[channel.messages.length-1]);
        });
        return sortedMessages;
    }

    var attachChannelName = function(subscriptions) {
        var sortedMessages = [];
        subscriptions.map(function(channel) {
            sortedMessages.push(channel.name + " : " + channel.messages.join(", "));
        });
        return sortedMessages;
    }

    var numberOfAlreadyReadMessages = {};
    var newOnly = function (subscriptions) {
        var sortedMessages = [];
        subscriptions.map(function (channel) {
            var counter = 0;
            if (numberOfAlreadyReadMessages[channel.name] == null) {
                numberOfAlreadyReadMessages[channel.name] = 0;
            }
            while (channel.messages.length-counter > numberOfAlreadyReadMessages[channel.name]) {
                sortedMessages.push(channel.messages[channel.messages.length-1-counter]);
                counter++;
            }
            numberOfAlreadyReadMessages[channel.name] = channel.messages.length;
        });
        return sortedMessages;
    }

    // Bob хочет получать только последнее сообщение из каждого канала
    var Bob = createReceiver(lastOnly)

    // Tom хочет видеть названия каналов
    var Tom = createReceiver(attachChannelName)

    // Mike не хочет видеть сообщения, которые он уже прочитал
    var Mike = createReceiver(newOnly)

    // подписка на каналы
    Bob.subscribe(channel1)
    Tom.subscribe(channel1)
    Tom.subscribe(channel2)
    Mike.subscribe(channel2)

    // рассылка сообщений по каналам
    notifier.sendToChannel('channel1', 'some message')
    notifier.sendToChannel('channel1', 'another message')
    notifier.sendToChannel('channel2', 'lorem ipsum')
    notifier.sendToChannel('channel2', 'dolor')

    // Получение сообщений, взаимодействие с сообщениями не должно менять состояние сервиса нотификаций
    console.log(Bob.getMessages()) // только 'another message'
    console.log(Tom.getMessages()) // [channel1] : some message , another message | [channel2] : ...
    console.log(Mike.getMessages()) // lorem ipsum , dolor

    notifier.sendToChannel('channel2', 'some new stuff')
    console.log(Mike.getMessages()) // some new stuff
}

App()

function createNotificationService() {
    return {
        channels : [],
        createChannel: function (name) {
            var newChannel = {
                name : name,
                messages : []
            };
            this.channels.push(newChannel);
            return newChannel;
        },
        sendToChannel: function (channelName, message) {
            this.channels.map(function(channel, index) {
                if (channel.name === channelName) {
                    channel.messages.push(message);
                }
            })
        }
    }
}

function createReceiver(callBack) {
    return {
        receiver : {
            subscriptions : [],
            parameter : callBack
        },
        subscribe: function (channel) {
            this.receiver.subscriptions.push(channel);
        },
        getMessages: function() {
            return this.receiver.parameter(this.receiver.subscriptions);
        }
    }
}