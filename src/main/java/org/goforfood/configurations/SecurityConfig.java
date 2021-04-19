package org.goforfood.configurations;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String[] PUBLIC_ROUTES = { "/", "/login", "/register", "/js/**", "/css/**", "/images/**" };

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers(PUBLIC_ROUTES).permitAll().anyRequest().authenticated().and().formLogin()
                .loginPage("/").and().logout().logoutSuccessUrl("/");
    }

}
