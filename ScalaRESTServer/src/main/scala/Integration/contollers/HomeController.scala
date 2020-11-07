package Integration.contollers

import org.springframework.web.bind.annotation.{GetMapping, RestController}

@RestController
class HomeController {

  @GetMapping(path = Array("/"))
  def demo: String = {
    "Welcome to Angel's scala API. HUE HUE HUE HUE"
  }

}