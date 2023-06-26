package com.finist.wellsback.models.prichinaProstoiaModels;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "prichProstBrig1")
public class PrichProstoiaBrigad {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "prichina")
    private String prichina;

    @Column(name = "arhivprichin")
    private Boolean arhivprichin;

    @ManyToOne(optional=true, fetch = FetchType.EAGER, cascade=CascadeType.REFRESH)                                     //@ManyToOne определяет однозначную ассоциацию с другим классом сущностей, который имеет кратность «многие к одному».
    @JoinColumn(name = "podgrouppa", nullable = true)
    private PodgrouppaPrichProstoiaBrigad podgrouppa;

    @ManyToOne(optional=true, fetch = FetchType.EAGER, cascade=CascadeType.REFRESH)                                     //@ManyToOne определяет однозначную ассоциацию с другим классом сущностей, который имеет кратность «многие к одному».
    @JoinColumn(name = "grouppa", nullable = true)
    private GrouppaPrichProstoiaBrigad grouppa;
}