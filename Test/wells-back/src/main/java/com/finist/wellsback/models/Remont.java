package com.finist.wellsback.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity                                                                                                                 //класс типа Entity указывает на класс, который на абстрактном уровне связан с таблицей в базе данных. Каждый объект, созданный этим классом, указывает на кортеж самой таблицы, содержащий информацию последней.
@Setter
@Getter
@AllArgsConstructor

@Table(name = "remonty")
public class Remont {

    @Id     //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    @GeneratedValue                                                              //автоматическая генерация значения
    private Long id;

    @Column(name = "skvajina")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String skvajina;


    @Column(name = "kyst")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String kyst;


    @Column(name = "mestorojdenie")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String mestorojdenie;


    @Column(name = "vid_remonta")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String vid_remonta;


    @Column(name = "prichina")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String prichina;


    @Column(name = "start_date_year")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String start_date_year;


    @Column(name = "start_date_month")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String start_date_month;


    @Column(name = "start_date_day")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String start_date_day;


    @Column(name = "start_time_hour")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String start_time_hour;


    @Column(name = "start_time_minute")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String start_time_minute;


    @Column(name = "end_date_year")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String end_date_year;


    @Column(name = "end_date_month")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String end_date_month;


    @Column(name = "end_date_day")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String end_date_day;


    @Column(name = "end_time_hour")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String end_time_hour;


    @Column(name = "end_time_minute")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String end_time_minute;


    @Column(name = "brigada")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String brigada;


    @Column(name = "primechanie")
    //@Column используется для добавления имени столбца в таблицу конкретной базы данных
    private String primechanie;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSkvajina() {
        return skvajina;
    }

    public void setSkvajina(String skvajina) {
        this.skvajina = skvajina;
    }

    public String getKyst() {
        return kyst;
    }

    public void setKyst(String kyst) {
        this.kyst = kyst;
    }

    public String getMestorojdenie() {
        return mestorojdenie;
    }

    public void setMestorojdenie(String mestorojdenie) {
        this.mestorojdenie = mestorojdenie;
    }

    public String getVid_remonta() {
        return vid_remonta;
    }

    public void setVid_remonta(String vid_remonta) {
        this.vid_remonta = vid_remonta;
    }

    public String getPrichina() {
        return prichina;
    }

    public void setPrichina(String prichina) {
        this.prichina = prichina;
    }

    public String getStart_date_year() {
        return start_date_year;
    }

    public void setStart_date_year(String start_date_year) {
        this.start_date_year = start_date_year;
    }

    public String getStart_date_month() {
        return start_date_month;
    }

    public void setStart_date_month(String start_date_month) {
        this.start_date_month = start_date_month;
    }

    public String getStart_date_day() {
        return start_date_day;
    }

    public void setStart_date_day(String start_date_day) {
        this.start_date_day = start_date_day;
    }

    public String getStart_time_hour() {
        return start_time_hour;
    }

    public void setStart_time_hour(String start_time_hour) {
        this.start_time_hour = start_time_hour;
    }

    public String getStart_time_minute() {
        return start_time_minute;
    }

    public void setStart_time_minute(String start_time_minute) {
        this.start_time_minute = start_time_minute;
    }

    public String getEnd_date_year() {
        return end_date_year;
    }

    public void setEnd_date_year(String end_date_year) {
        this.end_date_year = end_date_year;
    }

    public String getEnd_date_month() {
        return end_date_month;
    }

    public void setEnd_date_month(String end_date_month) {
        this.end_date_month = end_date_month;
    }

    public String getEnd_date_day() {
        return end_date_day;
    }

    public void setEnd_date_day(String end_date_day) {
        this.end_date_day = end_date_day;
    }

    public String getEnd_time_hour() {
        return end_time_hour;
    }

    public void setEnd_time_hour(String end_time_hour) {
        this.end_time_hour = end_time_hour;
    }

    public String getEnd_time_minute() {
        return end_time_minute;
    }

    public void setEnd_time_minute(String end_time_minute) {
        this.end_time_minute = end_time_minute;
    }

    public String getBrigada() {
        return brigada;
    }

    public void setBrigada(String brigada) {
        this.brigada = brigada;
    }

    public String getPrimechanie() {
        return primechanie;
    }

    public void setPrimechanie(String primechanie) {
        this.primechanie = primechanie;
    }


    public Remont() {
    }

    public Remont(String skvajina, String kyst, String mestorojdenie, String vid_remonta, String prichina, String start_date_year, String start_date_month, String start_date_day, String start_time_hour, String start_time_minute, String end_date_year,String end_date_month,String end_date_day,String end_time_hour,String end_time_minute,String brigada,String primechanie) {

        this.skvajina = skvajina;
        this.kyst = kyst;
        this.mestorojdenie = mestorojdenie;
        this.vid_remonta = vid_remonta;
        this.prichina = prichina;
        this.start_date_year = start_date_year;
        this.start_date_month = start_date_month;
        this.start_date_day = start_date_day;
        this.start_time_hour = start_time_hour;
        this.start_time_minute = start_time_minute;
        this.end_date_year = end_date_year;
        this.end_date_month = end_date_month;
        this.end_date_day = end_date_day;
        this.end_time_hour = end_time_hour;
        this.end_time_minute = end_time_minute;
        this.brigada = brigada;
        this.primechanie = primechanie;
    }
}
