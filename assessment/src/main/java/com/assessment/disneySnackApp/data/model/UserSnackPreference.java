package com.assessment.disneySnackApp.data.model;


import jakarta.persistence.*;

import java.util.StringJoiner;

@Entity
@Table(name = "UserSnackPreference")
public class UserSnackPreference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int userSnackPreferenceId;
    int usersId;
    int snacksId;
    boolean wantToTry;
    boolean tried;
    boolean favorite;

    public UserSnackPreference() {
    }

    public UserSnackPreference(int userSnackPreferenceId, int usersId, int snacksId, boolean wantToTry, boolean tried, boolean favorite) {
        this.userSnackPreferenceId = userSnackPreferenceId;
        this.usersId = usersId;
        this.snacksId = snacksId;
        this.wantToTry = wantToTry;
        this.tried = tried;
        this.favorite = favorite;
    }

    public int getUserSnackPreferenceId() {
        return userSnackPreferenceId;
    }

    public void setUserSnackPreferenceId(int userSnackPreferenceId) {
        this.userSnackPreferenceId = userSnackPreferenceId;
    }

    public int getUsersId() {
        return usersId;
    }

    public void setUsersId(int usersId) {
        this.usersId = usersId;
    }

    public int getSnacksId() {
        return snacksId;
    }

    public void setSnacksId(int snacksId) {
        this.snacksId = snacksId;
    }

    public boolean isWantToTry() {
        return wantToTry;
    }

    public void setWantToTry(boolean wantToTry) {
        this.wantToTry = wantToTry;
    }

    public boolean isTried() {
        return tried;
    }

    public void setTried(boolean tried) {
        this.tried = tried;
    }

    public boolean isFavorite() {
        return favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", UserSnackPreference.class.getSimpleName() + "[", "]")
                .add("userSnackPreferenceId=" + userSnackPreferenceId)
                .add("usersId=" + usersId)
                .add("snacksId=" + snacksId)
                .add("wantToTry=" + wantToTry)
                .add("tried=" + tried)
                .add("favorite=" + favorite)
                .toString();
    }
}
