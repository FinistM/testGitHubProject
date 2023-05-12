package com.finist.wellsback.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Time;
import java.sql.Date;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "prichProstBrig")
public class PrichProstoiaBrigad {

    @Id
    @GeneratedValue
    //автоматическая генерация значения
    private Long id;

    @Column(name = "prichina")                                                                                          //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String prichina;

    @ManyToOne(optional=true, fetch = FetchType.EAGER, cascade=CascadeType.REFRESH)                                     //@ManyToOne определяет однозначную ассоциацию с другим классом сущностей, который имеет кратность «многие к одному».
    @JoinColumn(name = "groups", nullable = true)
    private VidPrichProstoiaBrigad groups;
}
