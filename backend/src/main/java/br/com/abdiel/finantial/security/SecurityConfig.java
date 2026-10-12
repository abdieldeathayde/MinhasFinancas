package br.com.abdiel.finantial.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
public class SecurityConfig {
  @Bean SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http.csrf(c -> c.disable())
      .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      .authorizeHttpRequests(a -> a.requestMatchers("/api/auth/**","/swagger-ui/**","/v3/api-docs/**","/actuator/health").permitAll().anyRequest().authenticated())
      .httpBasic(Customizer.withDefaults()).build();
  }
  @Bean PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }
}
