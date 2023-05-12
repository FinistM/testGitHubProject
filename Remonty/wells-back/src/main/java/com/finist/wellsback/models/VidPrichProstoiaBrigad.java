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

@Table(name = "vidPrichProstBrig")
public class VidPrichProstoiaBrigad {

    @Id
    @GeneratedValue
    //автоматическая генерация значения
    private Long id;

    @Column(name = "groups")                                                                                              //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String groups;
}
