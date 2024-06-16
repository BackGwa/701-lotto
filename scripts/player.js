let player_list = {
    "왈라비" : {
        name : "왈라비",
        joined : false
    },
    "그니그니" : {
        name : "그니그니",
        joined : false
    },
    "김현민" : {
        name : "김현민",
        joined : false
    },
    "뀨으뀨유" : {
        name : "뀨으뀨유",
        joined : false
    },
    "백과" : {
        name : "백과",
        joined : false
    },
    "희진" : {
        name : "희진",
        joined : false
    },
    "초보" : {
        name : "초보",
        joined : false
    },
    "히히" : {
        name : "히히",
        joined : false
    },
    "도로동동" : {
        name : "도로동동",
        joined : false
    },
    "시온" : {
        name : "시온",
        joined : false
    },
    "유치" : {
        name : "유치",
        joined : false
    },
    "임시훈" : {
        name : "임시훈",
        joined : false
    },
    "히창" : {
        name : "히창",
        joined : false
    },
    "nursing2170" : {
        name : "nursing2170",
        joined : false
    },
    "merai33" : {
        name : "merai33",
        joined : false
    }
}

function load_list() {
    const target = document.querySelector(".player-scroll");
    for (i in player_list) {
        target.innerHTML += `
            <div class="hover click player-item" id="${player_list[i].name}" onclick="change_stat('${player_list[i].name}');">
                ${player_list[i].name}
                <div class="check"></div>
            </div>
        `;
    }
}

function change_stat(name) {
    if (!player_list[name].joined && joined_player().count >= player_count * team_count) {
        return;
    }

    player_list[name].joined = !player_list[name].joined;

    if (player_list[name].joined) {
        document.querySelector(`#${name}`).classList.add("joined");
    } else {
        document.querySelector(`#${name}`).classList.remove("joined");
    }

    refrash();
}

function joined_player() {
    let count = 0;
    let player = [];
    for (i in player_list) {
        if (player_list[i].joined) {
            count++;
            player.push(player_list[i].name);
        }
    }
    return {
        count : count,
        player : player
    }
}

function refrash() {
    const value = joined_player();
    document.querySelector(".current-player").innerHTML = value.count;
    document.querySelector("#player-tag").innerHTML = `플레이어 (${value.count}/${Object.keys(player_list).length})`
}