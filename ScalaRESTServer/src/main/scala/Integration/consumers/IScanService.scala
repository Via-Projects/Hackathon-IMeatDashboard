package Integration.consumers

import Integration.model.Scan

trait IScanService {
    def getScans: Array[Scan]
}
