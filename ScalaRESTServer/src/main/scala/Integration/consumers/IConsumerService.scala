package Integration.consumers

import Integration.model.Consumer

trait IConsumerService {
    def getConsumers: Array[Consumer]
}
