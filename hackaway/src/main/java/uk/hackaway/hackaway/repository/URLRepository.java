package uk.hackaway.hackaway.repository;

import uk.hackaway.hackaway.model.URL;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface URLRepository extends MongoRepository<URL, String> {
}
