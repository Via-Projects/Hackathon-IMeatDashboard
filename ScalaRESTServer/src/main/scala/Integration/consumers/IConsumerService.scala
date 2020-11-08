package Integration.consumers

import Integration.model.Consumer

trait IUserConsumer {
    def getUsers: List[Consumer]
}
