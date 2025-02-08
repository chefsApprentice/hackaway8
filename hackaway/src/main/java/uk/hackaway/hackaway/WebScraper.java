package uk.hackaway.hackaway;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class WebScraper {
	
	private final static Pattern WB_PATTERN = Pattern.compile("(?<=\\w)\\b");

	private static String truncateAfterWords(int n, String s) {
	   if (s == null) return null;
	   if (n <= 0) return "";
	   Matcher m = WB_PATTERN.matcher(s);
	   for (int i=0; i<n && m.find(); i++);
	   if (m.hitEnd())
	      return s;
	   else
	      return s.substring(0, m.end());
	}
	
    public static String scrapeText(String url) {
        StringBuilder textContent = new StringBuilder();
        
        try {
            // Connect to the URL and get the HTML document
            Document doc = Jsoup.connect(url)
                              .userAgent("Mozilla/5.0")
                              .timeout(1000)             
                              .get();
            
            // Get all text elements
            Elements paragraphs = doc.select("p, h1, h2, h3, h4, h5, h6, div");
            
            // Extract and combine text content
            for (Element element : paragraphs) {
                String text = element.text().trim();
                if (!text.isEmpty()) {
                    textContent.append(text).append("\n\n");
                }
            }
            
        } catch (IOException e) {
            return "Error scraping URL: " + e.getMessage();
        }
        
        return truncateAfterWords(1000, textContent.toString().trim());
    }
    
//    public static void main(String[] args) {
//        // Example usage
//        String url = "https://example.com";
//        String text = scrapeText(url);
//        System.out.println("Extracted text:\n" + text);
//    }
}