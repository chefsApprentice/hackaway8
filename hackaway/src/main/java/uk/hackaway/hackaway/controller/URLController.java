package uk.hackaway.hackaway.controller;

import uk.hackaway.hackaway.model.URL;
import uk.hackaway.hackaway.repository.URLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/urls")
public class URLController {

  @Autowired
  private URLRepository urlRepository;

  // POST request to add a new URL entry
  @PostMapping
  public ResponseEntity<URL> createURL(@RequestBody URL url) {
    URL savedURL = urlRepository.save(url);
    return ResponseEntity.ok(savedURL);
  }

  // GET request to list all URLs
  @GetMapping
  public ResponseEntity<List<URL>> getAllURLs() {
    List<URL> urls = urlRepository.findAll();
    return ResponseEntity.ok(urls);
  }
}

