package Integration.consumers

import Integration.model.ConsumerPreferences

trait IConsumerPreferencesService {

  def getUserPreferences: Seq[ConsumerPreferences]

}
