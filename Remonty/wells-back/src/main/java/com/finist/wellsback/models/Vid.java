package com.finist.wellsback.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "vidy")
public class Vid {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "name")
    private String name;

}
