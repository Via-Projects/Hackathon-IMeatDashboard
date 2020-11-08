package Integration.consumers

import Integration.model.Scan

trait IScanConsumer {
    def getScans: List[Scan]
}
