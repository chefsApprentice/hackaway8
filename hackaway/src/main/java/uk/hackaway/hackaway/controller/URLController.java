package uk.hackaway.hackaway.controller;

import uk.hackaway.hackaway.ApiConnector;
import uk.hackaway.hackaway.WebScraper;
import uk.hackaway.hackaway.model.URL;
import uk.hackaway.hackaway.repository.URLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/urls")
public class URLController {

	@Autowired
	private URLRepository urlRepository;

//  // POST request to add a new URL entry
//  @PostMapping
//  public ResponseEntity<URL> createURL(@RequestBody URL url) {
//    URL savedURL = urlRepository.save(url);
//    return ResponseEntity.ok(savedURL);
//  }

	// GET request to list all URLs
	@GetMapping
	public ResponseEntity<List<URL>> getAllURLs() {
		List<URL> urls = urlRepository.findAll();
		return ResponseEntity.ok(urls);
	}

	@PostMapping
	public ResponseEntity<List<URL>> processURLs(@RequestBody List<URL> urls) {
		System.out.println("Received URLs:");
		urls.forEach(url -> System.out.println(url.getName()));
		List<URL> res = new ArrayList<>();
		urls.forEach(url -> {
//			URL urlName = new URL();
//			urlName.setName(url.getName());
//			Example<URL> exUrl = Example.of(urlName);
			if ((urlRepository.findById(url.getName())).orElse(null) != null) {
				URL newUrl = urlRepository.findById(url.getName()).orElse(null);
				System.out.println("resExisting");
				System.out.println(newUrl.getPercentage());
				res.add(newUrl);
			} else {
				
//				webscrape
				String text = WebScraper.scrapeText(url.getName());
//				String text = "An overview of React and key features React is a popular open source frontend JavaScript library that allows you to create various reusable UI components. It leverages a mechanism called JavaScript XML when building pages, which allows you to provide users with a dynamic page. The best thing about React is that it comes with several helpful functionalities and responsive features. As a result, React has a shallow learning curve and straightforward design; however, building high-performing web applications requires a deeper understanding of JavaScript fundamentals. So, professional developers can use the framework to build scalable web apps, and those with experience in other JavaScript frontend frameworks will be able to migrate without friction. All these aspects account for the growing popularity of React among developers. Companies such as Uber, Instagram, Netflix, and, of course, Contentful, employ the framework for building their web apps. Virtual DOM The Virtual DOM (document object model) is an important feature of React. React generates a lightweight representation of the real DOM in-memory and uses this to compare changes to the browser’s DOM. This process, called “reconciliation,” makes page manipulations via React much faster because React only ";
//				Connect to lllm
				ApiConnector.connect();
				Integer aiRes = ApiConnector.get(text);
				url.setPercentage(aiRes);
				
				urlRepository.save(url);
				
				
				res.add(url);
			}
		});
		
		
		return ResponseEntity.ok(res);
	}
}
