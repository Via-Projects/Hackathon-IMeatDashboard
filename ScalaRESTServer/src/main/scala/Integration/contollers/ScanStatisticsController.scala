package Integration.contollers

import Integration.consumers.IScanStatisticsRecordService
import com.google.gson.Gson
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.{HttpStatus, ResponseEntity}
import org.springframework.web.bind.annotation.{CrossOrigin, GetMapping, RestController}

@CrossOrigin(origins = Array("*"), allowedHeaders = Array("*"))
@RestController
class ScanStatisticsController() {

  @Autowired var service: IScanStatisticsRecordService = _

  val gson = new Gson()

  @GetMapping(path = Array("/scanStatistics"), produces = Array("application/json"))
  def getScans: ResponseEntity[String] = {
    ResponseEntity.status(HttpStatus.OK).body(gson.toJson(service.getScanStatisticsRecords.toArray))
  }

}
