package Integration.consumers

import Integration.model.ScanStatisticsRecord

trait IScanStatisticsRecordService {
  def getScanStatisticsRecords: Seq[ScanStatisticsRecord]
}
