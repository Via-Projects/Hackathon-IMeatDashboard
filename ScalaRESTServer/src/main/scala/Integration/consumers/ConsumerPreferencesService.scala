package Integration.consumers

import Integration.model.ConsumerPreferences
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ConsumerPreferencesService() extends IConsumerPreferencesService {

  @Autowired var consumerService: IConsumerService = _

  def getUserPreferences: Seq[ConsumerPreferences] = {
    val consumerPreferences = consumerService.getConsumers
      .groupBy(consumer => consumer.preference)
      .view.mapValues(_.length)
      .toList
      .map { case (k, v) => ConsumerPreferences(k, v) }
    consumerPreferences.map(preference => ConsumerPreferences(preference.name, preference.percentage * 100 / consumerService.getConsumers.length))
  }

}
