package Integration.contollers

import Integration.model.Meat
import com.google.gson.Gson
import org.springframework.http.{HttpStatus, ResponseEntity}
import org.springframework.web.bind.annotation.{CrossOrigin, GetMapping, RestController}

@CrossOrigin(origins = Array("*"), allowedHeaders = Array("*"))
@RestController
class HomeController {

  val gson = new Gson()

  @GetMapping(path = Array("/"), produces = Array("application/json"))
  def demo: ResponseEntity[String] = {
    val meat = Meat("meat", 12)
    ResponseEntity.status(HttpStatus.OK).body(gson.toJson(meat))
  }

}