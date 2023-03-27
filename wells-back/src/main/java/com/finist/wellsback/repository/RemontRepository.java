package com.finist.wellsback.repository;

import com.finist.wellsback.models.Remont;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RemontRepository extends CrudRepository<Remont, Long> {
}
