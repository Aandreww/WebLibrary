package com.aandreww.server.repository;

import com.aandreww.server.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface UserRepository extends CrudRepository<User, Long>{

    User findByUserNameAndEnabled(String username, boolean enabled);

    User findByUserName(String username);

    long count();

    Iterable<User> findAll();

    User findById(Integer id);

}
