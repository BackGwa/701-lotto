function load_list() {
    const target = document.querySelector(".player-scroll");

    Object.keys(player_list).forEach((i) => {
        target.innerHTML += `
        <div class="hover click player-item" id="${i}" onclick="change_stat('${i}');">
            ${i}
            <div class="check"></div>
        </div>
    `;
    });
}

function change_stat(name) {
    if (!player_list[name].joined && joined_player().count >= player_count * team_count) {
        view_alert("플레이 인원보다, 큰 인원을 선택할 수 없습니다!", 2500);
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
            player.push(i);
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