package com.finist.wellsback.repository;

import com.finist.wellsback.models.Details;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface DetalizationRepository extends CrudRepository<Details, String>{


    //@Query(value = "SELECT vidy.name FROM vidy", nativeQuery = true)
    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "DROP TABLE IF EXISTS dettab; \n" +
            "WITH t as (\n" +
            "\tSELECT r.*, v.name\n" +
            "\tFROM remonty as r\n" +
            "\tFULL OUTER JOIN vidy as v ON r.vid_remonta = v.id\n" +
            ")\n" +
            "SELECT name, \n" +
            "cast(concat_ws('',COUNT(id)) as varchar) as col,\n" +
            "CASE\n" +
            "WHEN COUNT(id)=0 THEN cast('...' as varchar)\n" +
            "ELSE\n" +
            "array_to_string(\n" +
            "\tarray_agg(\n" +
            "\t\tconcat_ws(\n" +
            "\t\t\t'  ',\n" +
            "\t\t\tconcat_ws(' - ', date_start, date_end),\n" +
            "\t\t\tconcat_ws('/', skvajina, kyst, mestorojdenie)\n" +
            "\t\t)\n" +
            "\t),\n" +
            "\t';     '\n" +
            ") END detalization\n" +
            "INTO dettab\n" +
            "FROM t\n" +
            "GROUP BY name", nativeQuery = true)
    public void ditalisationUpdate();

    public List<Details> findByOrderByNameAsc();
}
