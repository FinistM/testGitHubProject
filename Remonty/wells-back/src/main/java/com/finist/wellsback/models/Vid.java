package com.finist.wellsback.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity                                                                                                                 //класс типа Entity указывает на класс, который на абстрактном уровне связан с таблицей в базе данных. Каждый объект, созданный этим классом, указывает на кортеж самой таблицы, содержащий информацию последней.
@Setter
@Getter
@AllArgsConstructor

@Table(name = "vidy")
public class Vid {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "name")
    private String name;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Vid() {
    }

    public Vid(String name) {

        this.name = name;
    }
}
