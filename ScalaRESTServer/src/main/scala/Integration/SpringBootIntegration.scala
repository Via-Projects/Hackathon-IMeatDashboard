package Integration

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.{EnableAutoConfiguration, SpringBootApplication}

@SpringBootApplication
class SpringBootIntegration {

}

object SpringBootIntegration extends App {
  SpringApplication.run(classOf[SpringBootIntegration])
}
