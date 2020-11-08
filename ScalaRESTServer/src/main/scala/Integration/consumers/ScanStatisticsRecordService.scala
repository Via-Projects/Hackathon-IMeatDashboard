package Integration.consumers

import Integration.model.ScanStatisticsRecord
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ScanStatisticsRecordService() extends IScanStatisticsRecordService {

  @Autowired var scansService: IScanService = _

  def getScanStatisticsRecords: Seq[ScanStatisticsRecord] = {
    scansService.getScans
      .groupBy(scan => scan.productName)
      .view
      .mapValues(_.length)
      .toList
      .map {
        case (k, v) => ScanStatisticsRecord(k, v)
      }
  }
}
