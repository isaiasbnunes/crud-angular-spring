package dev.braga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.braga.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
