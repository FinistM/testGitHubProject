package com.finist.wellsback.repository;

import com.finist.wellsback.models.Remont;
import com.finist.wellsback.models.Vid;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VidRepository extends CrudRepository<Vid, Long> {
        List<Vid> findByOrderByNameAsc();
}
