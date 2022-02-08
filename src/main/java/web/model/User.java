package web.model;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.*;

@Entity
@Table(name = "users")
public class User implements UserDetails{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id")
    private Long id;

    @Email
    @Column (name = "email", unique = true)
    private String email;

    @NotBlank(message = "Пусто, а не должно!")
    @Column(name = "password")
    private String password;

    @NotBlank(message = "Пусто, а не должно!")
    @Column(name = "name")
    private String name;

    @NotBlank(message = "Пусто, а не должно!")
    @Column(name = "last_name")
    private String surname;

    @NotBlank(message = "Пусто, а не должно!")
    @Column(name = "position")
    private String position;

    @Min(0)
    @Column(name = "salary")
    private int salary;


    @ManyToMany(fetch = FetchType.LAZY)
    @Fetch(FetchMode.JOIN)
    @JoinTable(name = "user_roles",                             //промежуточная таблица, которая соеденит наши две (users  roles)
            joinColumns = @JoinColumn(name = "user_id"),        //колонка, которая указывает на (соединяет) текущую таблицу (users)
            inverseJoinColumns = @JoinColumn(name = "role_id")) //колонка, которая указывает на (соединяет)  вторую таблицу (roles)
    private Set<Role> roles;

    public User() {
    }

    public User(Long id, String email, String password, String name, String surname, String position, int salary, Set<Role> roles) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.salary = salary;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = new HashSet<>();
        for (Role role : roles) {
            if (role.getName().contains("ROLE_ADMIN")) {
                this.roles.add(new Role("ROLE_ADMIN"));
            } else if (role.getName().contains("ROLE_USER")) {
                this.roles.add(new Role("ROLE_USER"));
            }
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
