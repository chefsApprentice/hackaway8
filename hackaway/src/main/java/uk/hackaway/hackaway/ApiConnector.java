package uk.hackaway.hackaway;
import java.util.Optional;

import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.Message;
import com.anthropic.models.MessageCreateParams;
import com.anthropic.models.Model;
import com.anthropic.models.TextBlock;

import uk.hackaway.hackaway.EnvVar;

public class ApiConnector {
	static AnthropicClient client;
//	static String res = new String();

	public static  void connect() {
	EnvVar env = new EnvVar();
	client = AnthropicOkHttpClient.builder()
			    .fromEnv()
			    .apiKey(env.ANTHROPIC_API_KEY)
			    .build();
	}
	
	public static Integer get(String text) {
		MessageCreateParams params = MessageCreateParams.builder()
			    .maxTokens(1024L)
			    .addUserMessage("output nothing but percentage as an integer. If a website is just listing a bunch of properties of the main focus give it a high score, if a website talks about any other sort of topic that isn't just a property give it a low score. If unsure give it a percentage of 50%. Here is the text:" + text )
			    .model(Model.CLAUDE_3_5_HAIKU_LATEST)
			    .build();
		
		
		Message message = client.messages().create(params);
			 
		int res = 0;
		try {
			res = Integer.parseInt( message.content().get(0).asText().text() ) ;
		} catch (Exception e) {}
		
		//			   res = Integer.parseInt ( (String) message.content().stream()
//			             .flatMap(contentBlock -> contentBlock.text().stream())
//			             .findFirst()
//			             .orElse(null) ) ;
			   
			   return res;
	}

}
