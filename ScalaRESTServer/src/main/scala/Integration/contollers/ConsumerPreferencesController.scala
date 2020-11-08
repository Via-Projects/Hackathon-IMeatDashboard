package Integration.contollers

import Integration.consumers.IConsumerPreferencesService
import com.google.gson.Gson
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.{HttpStatus, ResponseEntity}
import org.springframework.web.bind.annotation.{CrossOrigin, GetMapping, RestController}

@CrossOrigin(origins = Array("*"), allowedHeaders = Array("*"))
@RestController
class ConsumerPreferencesController {

  @Autowired var consumerPreferencesService: IConsumerPreferencesService = _

  val gson = new Gson()

  @GetMapping(path = Array("/consumerPreferences"), produces = Array("application/json"))
  def getScans: ResponseEntity[String] = {
    ResponseEntity.status(HttpStatus.OK).body(gson.toJson(consumerPreferencesService.getUserPreferences.toArray))
  }

}
