package com.finist.wellsback.repository;

import com.finist.wellsback.models.Vid;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VidRepository extends CrudRepository<Vid, Long> {
}
