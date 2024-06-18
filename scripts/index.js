const subtitle_content = [
    "완전 럭키비키잖아~",
    "미니진은 죽지않지",
    "관음증 ㄱㄴㄱㄴ",
    "유치 : 테이저건 맞고싶어요?",
    "미니진 : 드르렁 드르렁",
    "내래 혁명적인 샷을 보여주겠다우"
];

let team_count = 4;
let player_count = 4;

function main() {
    subtitle = document.querySelector('.sub-title');

    random_title();
    team_create(team_count, player_count);
    load_list();
    refrash();
    
    register_se();
}

function random_title() {
    subtitle.innerText = subtitle_content[randint(0, subtitle_content.length - 1)];
}

function register_se() {
    document.querySelectorAll(".hover").forEach((i) => {
        i.addEventListener("mouseenter", hover_event);
    });

    document.querySelectorAll(".click").forEach((i) => {
        i.addEventListener("click", click_event);
    });
}

function click_event() {
    play("res/sounds/button_click.mp3");
}

function hover_event() {
    play("res/sounds/button_hover.mp3");
}

function team_create(team_count, player_count) {
    const team = document.querySelector("#team");
    const max_player_counter = document.querySelector(".max-player");
    const team_counter = document.querySelector("#team-count");
    const player_counter = document.querySelector("#player-count");
    let player_list = "";

    team.innerHTML = "";
    max_player_counter.innerText = `/${team_count * player_count}`;
    team_counter.innerHTML = `${team_count}팀`;
    player_counter.innerHTML = `${player_count}명`;

    for (let i = 0; i < player_count; i++) {
        player_list += `<span class="player hover" id="player${i + 1}"></span>`
    }

    for (let i = 0; i < team_count; i++) {
        team.innerHTML += `
            <article class="team-list" id="team${i + 1}">
                <span class="team-indicator">
                    <span class="team-id">${i + 1}</span>
                    <span class="team-name">TEAM #${i + 1}</span>
                </span>
                ${player_list}
            </article>
        `;
    }

    team.innerHTML += "<div class='bottom-margin'></div>";

    register_se();
}

function team_count_change(value) {
    if (value == 1 && (team_count + 1) * player_count > 100) {
        view_alert("게임의 최대 인원은 100명 입니다.", 1500);
        return;
    }
    /*
    if (value == 1 && team_count == 10) {
        view_alert("최대 10팀만 만들 수 있습니다.", 1500);
        return;
    }
    */
    if (value == -1 && team_count == 2) {
        view_alert("팀은 최소 2팀으로 구성되어야 합니다.", 1500);
        return;
    }
    if (value == -1 && joined_player().count > player_count * (team_count - 1)) {
        view_alert("선택 된 인원이 많습니다!", 1500);
        return;
    }
    team_count += value;
    team_create(team_count, player_count);
}

function player_count_change(value) {
    if (value == 1 && (player_count + 1) * team_count > 100) {
        view_alert("게임의 최대 인원은 100명 입니다.", 1500);
        return;
    }
    if (value == 1 && player_count == 10) {
        view_alert("팀의 최대 인원은 10명 입니다.", 1500);
        return;
    }
    if (value == -1 && player_count == 1) {
        view_alert("팀의 최소 인원은 1명 입니다.", 1500);
        return;
    }
    if (value == -1 && joined_player().count > (player_count - 1) * team_count) {
        view_alert("선택 된 인원이 많습니다!", 1500);
        return;
    }
    player_count += value;
    team_create(team_count, player_count);
}

function soft_reset() {
    team_create(team_count, player_count);
    dialog_close();
}

function force_reset() {
    location.reload();
}

function team_gen() {
    let player = joined_player();

    if (player.count <= 1) {
        view_alert("팀을 생성하기에는 적은 인원입니다!", 2000);
        return;
    }
    
    soft_reset();

    for (let i = 0; i < team_count; i++) {
        for (let j = 0; j < player_count; j++) {
            if (player.player.length <= 0) {
                return;
            }
            const team = document.querySelector(`#team${i + 1}`);
            const player_item = team.querySelector(`#player${j + 1}`);
            const index = randint(0, player.player.length - 1);
            player_item.innerText = player.player[index];
            player.player.splice(index, 1);
        }
    }
}