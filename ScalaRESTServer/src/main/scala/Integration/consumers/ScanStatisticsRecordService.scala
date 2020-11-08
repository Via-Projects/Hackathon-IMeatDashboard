package Integration.services

import Integration.consumers.IScanService
import org.springframework.beans.factory.annotation.Autowired

@Singleton
class ScanStatisticsRecordService(@Autowired val scansService: IScanService) extends IScanStatisticsRecordService {

  def getScanStatisticsRecords(number: Int):Map[String,Int] = {
    scansService.getScans.groupBy(_.productName).view.mapValues(_.size).toMap
  }
}
