const subtitle_content = [
    "완전 럭키비키잖아~",
    "미니진은 죽지않지",
    "관음증 ㄱㄴㄱㄴ"
];

let team_count = 5;
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
    play("../res/sounds/button_click.mp3");
}

function hover_event() {
    play("../res/sounds/button_hover.mp3");
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

    register_se();
}

function team_count_change(value) {
    if (value == 1 && team_count == 15) {
        return;
    }
    if (value == -1 && team_count == 2) {
        return;
    }
    if (value == -1 && joined_player().count > player_count * (team_count - 1)) {
        return;
    }
    team_count += value;
    team_create(team_count, player_count);
}

function player_count_change(value) {
    if (value == 1 && player_count == 4) {
        return;
    }
    if (value == -1 && player_count == 1) {
        return;
    }
    if (value == -1 && joined_player().count > (player_count - 1) * team_count) {
        return;
    }
    player_count += value;
    team_create(team_count, player_count);
}