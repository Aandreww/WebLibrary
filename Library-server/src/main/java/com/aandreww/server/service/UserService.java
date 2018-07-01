package com.aandreww.server.service;

import com.aandreww.server.entity.User;
import com.aandreww.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("userService")
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findByUserNameAndEnabled(String username, boolean enabled){
        return userRepository.findByUserNameAndEnabled(username,enabled);
    }

    public User findByUserName(String username){
        return userRepository.findByUserName(username);
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public long count(){
        return userRepository.count();
    }

    public User findById(Integer id){
        return userRepository.findById(id);
    }

    public List<User> findAll(){
        List<User> list = new ArrayList<>();
        userRepository.findAll().forEach(e->list.add(e));
        return list;
    }
}
