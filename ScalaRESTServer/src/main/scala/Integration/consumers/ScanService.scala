package Integration.consumers

import java.net.{HttpURLConnection, URL}

import Integration.model.Scan
import com.google.gson.Gson
import org.springframework.stereotype.Service

@Service
class ScanService() extends IScanService {


  override def getScans: Array[Scan] = {
    val gson = new Gson()
    val connection = new URL("https://hackathon-db-api.azurewebsites.net/scan/get").openConnection.asInstanceOf[HttpURLConnection]
    connection.setRequestMethod("GET")
    val inputStream = connection.getInputStream
    val content = io.Source.fromInputStream(inputStream).mkString
    if (inputStream != null) inputStream.close()
    gson.fromJson(content, classOf[Array[Scan]])
  }
}
