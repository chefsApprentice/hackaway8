package uk.hackaway.hackaway.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "urls") // Collection name in MongoDB
public class URL {

  @Id
  private String name; // Website name
  private Integer percentage;
//  private boolean verified; // If the website is verified
//  private double userUp; // Upvote percentage
//  private double userDown; // Downvote percentage

  public URL() {}

  public URL(String name, Integer percentage) {
    this.name = name;
    this.percentage = percentage;
//    this.verified = verified;
//    this.userUp = userUp;
//    this.userDown = userDown;
  }

//  public String getId() {
//    return id;
//  }

  public String getName() {
    return name;
  }
  
  public Integer getPercentage() {
	  return percentage;
  }
  
  public void setPercentage(Integer percentage) {
	  this.percentage = percentage;
  }

//  public boolean isVerified() {
//    return verified;
//  }
//
//  public double getUserUp() {
//    return userUp;
//  }
//
//  public double getUserDown() {
//    return userDown;
//  }

//  public void setId(String id) {
//    this.id = id;
//  }

  public void setName(String name) {
    this.name = name;
  }

//  public void setVerified(boolean verified) {
//    this.verified = verified;
//  }
//
//  public void setUserUp(double userUp) {
//    this.userUp = userUp;
//  }
//
//  public void setUserDown(double userDown) {
//    this.userDown = userDown;
//  }
}
