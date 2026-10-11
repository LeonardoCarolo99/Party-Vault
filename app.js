const app = document.querySelector("#app");

const playerIcon = `
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="10" r="4" />
    <path d="M7.5 26v-2.4a8.5 8.5 0 0 1 17 0V26h-17Z" />
    <path d="M5 13.5a3.4 3.4 0 0 0 0 6.8M27 13.5a3.4 3.4 0 0 1 0 6.8" />
  </svg>
`;

const dmIcon = `
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 3.5 28 10v12L16 28.5 4 22V10l12-6.5Z" />
    <path d="m16 3.5 6.5 11L16 28.5 9.5 14.5 16 3.5Z" />
    <path d="m4 10 18.5 4.5M28 10l-18.5 4.5" />
  </svg>
`;

const dmTools = [
  {
    id: "session",
    icon: "◷",
    eyebrow: "AT THE TABLE",
    title: "Live Session Dashboard",
    description: "Keep the active session’s essential tools together while you run the game.",
    details: ["Track initiative and turns", "Follow hit points and conditions", "Keep live session tools in one place"],
  },
  {
    id: "almanac",
    icon: "⌘",
    eyebrow: "THE CAMPAIGN ARCHIVE",
    title: "Almanac",
    description: "Keep a personal campaign reference for NPCs, Locations, Factions, and Lore.",
    details: ["Record NPCs and places", "Organize factions and lore", "Keep a personal campaign reference"],
  },
  {
    id: "loot",
    icon: "✦",
    eyebrow: "AFTER THE ENCOUNTER",
    title: "Loot Generator",
    description: "Quickly put together rewards after an encounter, ready to share with the party.",
    details: ["Generate treasure and rewards", "Keep loot fitting the encounter", "Prepare a result to award"],
  },
  {
    id: "names",
    icon: "✧",
    eyebrow: "A NAME FOR EVERY FACE",
    title: "NPC Name Generator",
    description: "Find a fitting name when an unexpected character steps into the story.",
    details: ["Generate names for non-player characters", "Browse fresh suggestions", "Keep useful names close at hand"],
  },
  {
    id: "encounters",
    icon: "⚔",
    eyebrow: "PREPARE THE CHALLENGE",
    title: "Encounter Builder",
    description: "Plan the creatures, stakes, and details for the party’s next challenge.",
    details: ["Assemble encounter participants", "Review encounter details", "Prepare an encounter for a live session"],
  },
];

const playerArtwork = `
  <svg viewBox="0 0 240 220" aria-hidden="true">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="128" cy="108" r="82" stroke-width=".8" />
      <circle cx="128" cy="108" r="71" stroke-width=".6" stroke-dasharray="1 5" />
      <path d="m128 35 8 64-8 82-8-82 8-64Zm-73 73 64-8 82 8-82 8-64-8Z" stroke-width=".8" />
      <path d="m128 48 4 60-4 60-4-60 4-60Zm-60 60 60-4 60 4-60 4-60-4Z" stroke-width=".5" />
      <path d="m128 20 5 15-5-3-5 3 5-15Zm0 176 5-15-5 3-5-3 5 15ZM40 108l15-5-3 5 3 5-15-5Zm176 0-15-5 3 5-3 5 15-5Z" fill="currentColor" stroke-width=".6" />
      <path d="M128 83a25 25 0 0 0-25 25h50a25 25 0 0 0-25-25Z" stroke-width="1" />
      <path d="m103 108 25 35 25-35m-37 0 12 35 12-35m-12 0v35" stroke-width=".8" />
      <path d="m82 137-13 14m105-14 13 14M89 70l-9-10m96 10 9-10" stroke-width=".7" />
    </g>
    <g fill="currentColor" font-family="serif" font-size="7" letter-spacing="1">
      <text x="125" y="28">N</text><text x="125" y="207">S</text>
      <text x="32" y="110">W</text><text x="217" y="110">E</text>
    </g>
  </svg>
`;

const dmArtwork = `
  <svg viewBox="0 0 240 220" aria-hidden="true">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="128" cy="108" r="82" stroke-width=".8" />
      <circle cx="128" cy="108" r="71" stroke-width=".6" stroke-dasharray="1 5" />
      <path d="m128 27 62 45-24 73-76 0-24-73 62-45Z" stroke-width="1" />
      <path d="m128 27 0 118m62-73-86 73m-38-73 124 0m-100 73 38-118m38 118L128 27m-62 45 124 73m-100-73 76 0-38 73-38-73Z" stroke-width=".7" />
      <path d="m128 17 5 12-5-3-5 3 5-12Zm0 182 5-12-5 3-5-3 5 12ZM37 108l12-5-3 5 3 5-12-5Zm182 0-12-5 3 5-3 5 12-5Z" stroke-width=".7" />
      <path d="M85 173c17 9 68 9 86 0m-76 11c14 6 52 6 66 0M90 54c20-12 56-12 76 0" stroke-width=".6" />
    </g>
    <g fill="currentColor" font-family="serif" font-size="7" letter-spacing="1">
      <text x="125" y="14">N</text><text x="125" y="211">S</text>
      <text x="25" y="110">W</text><text x="225" y="110">E</text>
    </g>
  </svg>
`;

const homeView = `
  <section class="home-view" aria-labelledby="welcome-heading">
    <div class="intro">
      <p class="eyebrow">✧ &nbsp; THE CHRONICLES OF PARTY VAULT &nbsp; ✧</p>
      <h1 id="welcome-heading">One table.<br /><em>A thousand worlds.</em></h1>
      <p class="intro-copy">Gather your party, unfurl the map, and let the story find you.<br />Choose the role you were born to play.</p>
    </div>

    <div class="role-grid" aria-label="Choose your role">
      <a class="role-card role-card--player" href="#player" aria-label="Enter the Player zone">
        <span class="card-art">${playerArtwork}</span>
        <div class="card-heading">
          <span class="card-icon">${playerIcon}</span>
          <span class="card-index"><span>VOL.</span> I &nbsp;·&nbsp; THE COMPANY</span>
        </div>
        <h2>Join the Company</h2>
        <p>Forge a hero. Find your fellowship. Make a legend worth telling.</p>
        <span class="card-action">ENTER AS A PLAYER <span class="card-arrow" aria-hidden="true">⟶</span></span>
      </a>

      <a class="role-card role-card--dm" href="#dm" aria-label="Enter the Dungeon Master zone">
        <span class="card-art">${dmArtwork}</span>
        <div class="card-heading">
          <span class="card-icon">${dmIcon}</span>
          <span class="card-index"><span>VOL.</span> II &nbsp;·&nbsp; THE CHRONICLER</span>
        </div>
        <h2>Master the Story</h2>
        <p>Shape a world. Set fate in motion. Bring your next campaign to life.</p>
        <span class="card-action">ENTER AS GAME MASTER <span class="card-arrow" aria-hidden="true">⟶</span></span>
      </a>
    </div>

    <p class="table-note">
      <span aria-hidden="true">✦</span>
      NO PROPHECY IS WRITTEN. NO ADVENTURE IS THE SAME.
      <span aria-hidden="true">✦</span>
    </p>
  </section>
`;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function campaignStorageKey(role) {
  return `party-vault-campaigns-${role}`;
}

const friendsStorageKey = "party-vault-friends";

function getFriends() {
  const storedFriends = window.localStorage.getItem(friendsStorageKey);
  if (storedFriends === null) {
    return [];
  }

  let friends;
  try {
    friends = JSON.parse(storedFriends);
  } catch {
    throw new Error("Saved friends could not be read. The stored data was not changed.");
  }

  if (
    !Array.isArray(friends) ||
    friends.some(
      (friend) =>
        !friend ||
        typeof friend.id !== "string" ||
        typeof friend.name !== "string" ||
        !Array.isArray(friend.messages) ||
        friend.messages.some(
          (message) =>
            !message ||
            typeof message.id !== "string" ||
            typeof message.text !== "string" ||
            typeof message.sentAt !== "string",
        ),
    )
  ) {
    throw new Error("Saved friend data is invalid. The stored data was not changed.");
  }

  return friends;
}

function renderFriends(selectedFriendId = "") {
  const content = document.querySelector("#friends-content");
  if (!(content instanceof HTMLDivElement)) {
    throw new Error("The friends dialog content was not found.");
  }

  let friends;
  try {
    friends = getFriends();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Saved friends could not be loaded.";
    content.innerHTML = `<p class="friends-error" role="alert">${escapeHtml(message)}</p>`;
    return;
  }

  const selectedFriend = friends.find((friend) => friend.id === selectedFriendId) ?? friends[0];
  const friendLinks = friends.length
    ? friends
        .map(
          (friend) => `
            <button class="friend-link${friend.id === selectedFriend?.id ? " is-active" : ""}" type="button" data-friend-id="${escapeHtml(friend.id)}" aria-pressed="${friend.id === selectedFriend?.id}">
              <span class="friend-avatar" aria-hidden="true">${escapeHtml(friend.name.slice(0, 1).toUpperCase())}</span>
              <span class="friend-link-copy"><strong>${escapeHtml(friend.name)}</strong><span>${friend.messages.length} ${friend.messages.length === 1 ? "DRAFT" : "DRAFTS"}</span></span>
            </button>
          `,
        )
        .join("")
    : `<p class="friends-empty-list">Your fellowship is waiting to grow.</p>`;

  const messages = selectedFriend?.messages.length
    ? selectedFriend.messages
        .map(
          (message) => `
            <article class="friend-message">
              <p>${escapeHtml(message.text)}</p>
              <span>YOU · LOCAL DRAFT · ${escapeHtml(new Date(message.sentAt).toLocaleString())}</span>
            </article>
          `,
        )
        .join("")
    : `<div class="friend-thread-empty"><span aria-hidden="true">✧</span><h3>${selectedFriend ? `A quiet start with ${escapeHtml(selectedFriend.name)}` : "Your private corner"}</h3><p>${selectedFriend ? "Write a message draft below. It stays here until online messaging is available." : "Add a friend to start a local message draft."}</p></div>`;

  content.innerHTML = `
    <div class="friends-layout">
      <aside class="friends-sidebar" aria-label="Friend list">
        <form class="friend-add-form">
          <label for="friend-name">ADD A FRIEND</label>
          <div class="friend-add-fields">
            <input id="friend-name" name="name" type="text" maxlength="40" placeholder="Display name" required />
            <button type="submit" aria-label="Add friend">＋</button>
          </div>
          <p class="friend-feedback" role="status" aria-live="polite"></p>
        </form>
        <div class="friend-list">${friendLinks}</div>
      </aside>
      <section class="friend-thread" aria-label="${selectedFriend ? `Conversation with ${escapeHtml(selectedFriend.name)}` : "Message drafts"}">
        ${
          selectedFriend
            ? `
              <header class="friend-thread-heading">
                <div><span class="friend-avatar" aria-hidden="true">${escapeHtml(selectedFriend.name.slice(0, 1).toUpperCase())}</span><h3>${escapeHtml(selectedFriend.name)}</h3></div>
                <button class="friend-remove" type="button" data-remove-friend="${escapeHtml(selectedFriend.id)}">REMOVE FRIEND</button>
              </header>
              <div class="friend-messages" aria-live="polite">${messages}</div>
              <form class="friend-message-form" data-friend-id="${escapeHtml(selectedFriend.id)}">
                <label class="visually-hidden" for="friend-message">Message draft</label>
                <textarea id="friend-message" name="message" rows="2" maxlength="1000" placeholder="Write a message draft…" required></textarea>
                <button type="submit">SAVE DRAFT <span aria-hidden="true">⟶</span></button>
                <p class="friend-feedback" role="status" aria-live="polite"></p>
              </form>
            `
            : `<div class="friend-thread-empty"><span aria-hidden="true">✧</span><h3>Make room at the table</h3><p>Add a friend by display name to start a local message draft.</p></div>`
        }
      </section>
    </div>
  `;
}

function getCampaigns(role) {
  const storedCampaigns = window.localStorage.getItem(campaignStorageKey(role));
  if (storedCampaigns === null) {
    return [];
  }

  let campaigns;
  try {
    campaigns = JSON.parse(storedCampaigns);
  } catch {
    throw new Error("Saved campaigns could not be read. The stored data was not changed.");
  }

  if (
    !Array.isArray(campaigns) ||
    campaigns.some(
      (campaign) =>
        !campaign ||
        typeof campaign.id !== "string" ||
        typeof campaign.name !== "string" ||
        !campaign.data ||
        typeof campaign.data !== "object" ||
        Array.isArray(campaign.data),
    )
  ) {
    throw new Error("Saved campaign data is invalid. The stored data was not changed.");
  }

  return campaigns;
}

function formatCampaignDate(value) {
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "";
    }
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

function campaignListMeta(role, campaign) {
  const meta = [];
  if (role === "player") {
    let sessionCount = 0;
    try {
      sessionCount = playerSessions(campaign).length;
    } catch {
      sessionCount = 0;
    }
    meta.push(`${sessionCount} ${sessionCount === 1 ? "session" : "sessions"}`);
    let characterName = "";
    try {
      characterName = getCharacterSheet(campaign)?.name ?? "";
    } catch {
      characterName = "";
    }
    meta.push(characterName ? characterName : "No character yet");
  } else {
    let rosterCount = 0;
    try {
      rosterCount = getSessionDashboard(campaign).roster?.length ?? 0;
    } catch {
      rosterCount = 0;
    }
    meta.push(`${rosterCount} ${rosterCount === 1 ? "player" : "players"}`);
    let entryCount = 0;
    try {
      entryCount = getAlmanac(campaign).entries?.length ?? 0;
    } catch {
      entryCount = 0;
    }
    meta.push(`${entryCount} almanac ${entryCount === 1 ? "record" : "records"}`);
  }
  const created = campaign && typeof campaign.createdAt === "string" ? formatCampaignDate(campaign.createdAt) : "";
  if (created) {
    meta.push(`Created ${created}`);
  }
  return meta.slice(0, 3);
}

function renderCampaignList(role) {
  const isDungeonMaster = role === "dm";
  const campaigns = [...getCampaigns(role)].sort((a, b) => {
    const aTime = typeof a.createdAt === "string" ? Date.parse(a.createdAt) : NaN;
    const bTime = typeof b.createdAt === "string" ? Date.parse(b.createdAt) : NaN;
    if (Number.isNaN(aTime) && Number.isNaN(bTime)) {
      return 0;
    }
    if (Number.isNaN(aTime)) {
      return 1;
    }
    if (Number.isNaN(bTime)) {
      return -1;
    }
    return bTime - aTime;
  });
  const rows = campaigns.length
    ? campaigns
        .map(
          (campaign) => `
            <a class="campaign-row" href="#${role}/${encodeURIComponent(campaign.id)}">
              <span class="campaign-row-main">
                <strong>${escapeHtml(campaign.name)}</strong>
                <span class="campaign-row-meta">${campaignListMeta(role, campaign).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</span>
              </span>
              <span class="campaign-row-open">OPEN <span aria-hidden="true">⟶</span></span>
            </a>
          `,
        )
        .join("")
    : `<p class="campaign-empty">No campaigns yet. Name your first adventure above.</p>`;

  return `
    <section class="app-view app-view--${role}" aria-labelledby="campaign-heading">
      <nav class="app-breadcrumb" aria-label="Breadcrumb">
        <a href="#home">Great Hall</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">${isDungeonMaster ? "Game Master" : "Adventurer"}</span>
      </nav>
      <header class="app-header">
        <div>
          <p class="app-eyebrow">${isDungeonMaster ? "CHRONICLER’S QUARTERS" : "ADVENTURER’S QUARTERS"}</p>
          <h1 id="campaign-heading">${isDungeonMaster ? "Game Master campaigns" : "Adventurer campaigns"}</h1>
          <p class="app-sub">${isDungeonMaster ? "Each campaign keeps its own roster, tools, and reference." : "Each campaign keeps its own character, notes, and reference."}</p>
        </div>
        <span class="app-count" aria-label="${campaigns.length} ${campaigns.length === 1 ? "campaign" : "campaigns"}">${campaigns.length}</span>
      </header>
      <section class="app-panel" aria-labelledby="campaign-list-heading">
        <h2 id="campaign-list-heading">Your campaigns</h2>
        <form class="campaign-form campaign-create" data-role="${role}">
          <div class="campaign-create-row">
            <label class="visually-hidden" for="campaign-name">Campaign name</label>
            <input id="campaign-name" name="name" type="text" maxlength="80" placeholder="Name a new campaign — e.g. The Shattered Crown" required />
            <button class="campaign-submit campaign-create-submit" type="submit">CREATE <span aria-hidden="true">⟶</span></button>
          </div>
          <p class="campaign-feedback" role="status" aria-live="polite"></p>
        </form>
        <div class="campaign-rows">${rows}</div>
      </section>
    </section>
  `;
}

function campaignTabs(role) {
  if (role === "player") {
    return [
      { id: "character", label: "Character", icon: "♙", href: (campaignId) => `#player/${encodeURIComponent(campaignId)}/character` },
      { id: "notes", label: "Session notes", icon: "✎", href: (campaignId) => `#player/${encodeURIComponent(campaignId)}/notes` },
      { id: "almanac", label: "Almanac", icon: "⌘", href: (campaignId) => almanacHref("player", campaignId) },
    ];
  }
  return [
    { id: "session", label: "Session", icon: "◷", href: (campaignId) => `#dm/${encodeURIComponent(campaignId)}/session` },
    { id: "almanac", label: "Almanac", icon: "⌘", href: (campaignId) => almanacHref("dm", campaignId) },
    { id: "encounters", label: "Encounters", icon: "⚔", soon: true, href: (campaignId) => `#dm/${encodeURIComponent(campaignId)}/encounters` },
    { id: "names", label: "Names", icon: "✧", soon: true, href: (campaignId) => `#dm/${encodeURIComponent(campaignId)}/names` },
    { id: "loot", label: "Loot", icon: "✦", soon: true, href: (campaignId) => `#dm/${encodeURIComponent(campaignId)}/loot` },
  ];
}

function renderCampaignShell(role, campaign, campaignId, activeTab, content) {
  const tabs = campaignTabs(role);
  const roleLabel = role === "dm" ? "Game Master" : "Adventurer";
  return `
    <section class="app-view campaign-shell app-view--${role}" aria-labelledby="campaign-heading">
      <nav class="app-breadcrumb" aria-label="Breadcrumb">
        <a href="#home">Great Hall</a>
        <span aria-hidden="true">/</span>
        <a href="#${role}">${roleLabel}</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">${escapeHtml(campaign.name)}</span>
      </nav>
      <div class="shell-top">
        <h1 id="campaign-heading">${escapeHtml(campaign.name)}</h1>
      </div>
      <nav class="tab-rail" aria-label="Campaign sections">
        ${tabs.map((tab) => `
          <a class="tab${tab.id === activeTab ? " is-active" : ""}" href="${tab.href(campaignId)}" ${tab.id === activeTab ? 'aria-current="page"' : ""}>
            <span aria-hidden="true">${tab.icon}</span>${tab.label}${tab.soon ? `<small>SOON</small>` : ""}
          </a>
        `).join("")}
      </nav>
      <div class="shell-body">${content}</div>
    </section>
    ${role === "player" ? renderDiceTray() : ""}
  `;
}

function playerSessions(campaign) {
  const sessions = campaign.data.sessions === undefined ? [] : campaign.data.sessions;
  if (
    !Array.isArray(sessions) ||
    sessions.some(
      (session) =>
        !session ||
        typeof session.id !== "string" ||
        typeof session.title !== "string" ||
        typeof session.date !== "string" ||
        typeof session.notes !== "string",
    )
  ) {
    throw new Error("Saved session notes are invalid. The stored data was not changed.");
  }
  return sessions;
}

function localDateInputValue() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
}

function renderDiceTray() {
  return `
    <aside class="dice-tray" aria-label="Dice tray">
      <div class="dice-tray-panel" id="dice-tray-panel" hidden>
        <p class="dice-tray-eyebrow">✧ &nbsp; FATE IN YOUR HANDS &nbsp; ✧</p>
        <h2>Roll the dice</h2>
        <div class="dice-roll-display" aria-hidden="true">
          <span class="dice-roll-gem">?</span>
        </div>
        <div class="dice-tray-options" aria-label="Choose a die">
          ${[4, 6, 8, 10, 12, 20, 100]
            .map((sides) => `<button type="button" data-die-sides="${sides}">d${sides}</button>`)
            .join("")}
        </div>
        <p class="dice-tray-result" role="status" aria-live="polite">Choose a die to roll.</p>
      </div>
      <button class="dice-tray-toggle" type="button" aria-label="Roll dice" aria-expanded="false" aria-controls="dice-tray-panel">
        <span aria-hidden="true">⚄</span> DICE
      </button>
    </aside>
  `;
}

function truncateText(value, maxLength) {
  const text = typeof value === "string" ? value : "";
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function renderSessionNotes(campaign, campaignId, selectedSessionId = "", mode = "") {
  const sessions = playerSessions(campaign);
  const selectedSession = selectedSessionId && selectedSessionId !== "new"
    ? sessions.find((session) => session.id === selectedSessionId)
    : null;
  const isNew = selectedSessionId === "new";
  const isEditing = isNew || mode === "edit";
  const sessionList = sessions.length
    ? [...sessions]
        .reverse()
        .map(
          (session) => `
            <a class="session-note-link${session.id === selectedSessionId ? " is-active" : ""}" href="#player/${encodeURIComponent(campaignId)}/notes/${encodeURIComponent(session.id)}" ${session.id === selectedSessionId ? 'aria-current="page"' : ""}>
              <strong>${escapeHtml(session.title)}</strong>
              <span>${escapeHtml(session.date)}</span>
            </a>
          `,
        )
        .join("")
    : `<p class="session-notes-empty">Your first session’s story is waiting to be written.</p>`;

  let editor;
  if (selectedSessionId && !isNew && !selectedSession) {
    editor = `
      <div class="session-note-editor session-note-editor--empty">
        <p class="player-feature-eyebrow">THE CHRONICLE</p>
        <h2>Session not found</h2>
        <p>This session note may have been removed.</p>
      </div>
    `;
  } else if (isEditing) {
    const title = selectedSession?.title ?? `Session ${sessions.length + 1}`;
    const date = selectedSession?.date ?? localDateInputValue();
    const cancelHref = selectedSession
      ? `#player/${encodeURIComponent(campaignId)}/notes/${encodeURIComponent(selectedSession.id)}`
      : `#player/${encodeURIComponent(campaignId)}/notes`;
    editor = `
      <form class="session-note-editor session-note-form" data-session-id="${selectedSession ? escapeHtml(selectedSession.id) : ""}" data-campaign-id="${escapeHtml(campaignId)}">
        <p class="player-feature-eyebrow">${isNew ? "A NEW GATHERING" : selectedSession ? "SESSION JOURNAL" : "YOUR CHRONICLE"}</p>
        <h2>${isNew ? "Record a session" : "Edit session notes"}</h2>
        ${selectedSession || isNew ? `
          <div class="session-note-fields">
            <label for="session-title">Session title</label>
            <input id="session-title" name="title" type="text" maxlength="80" value="${escapeHtml(title)}" required />
            <label for="session-date">Date played</label>
            <input id="session-date" name="date" type="date" value="${escapeHtml(date)}" required />
            <label for="session-notes">Your notes</label>
            <textarea id="session-notes" name="notes" rows="12" placeholder="What happened on this adventure?" required>${selectedSession ? escapeHtml(selectedSession.notes) : ""}</textarea>
          </div>
          <div class="session-note-form-actions">
            <button class="campaign-submit" type="submit">SAVE SESSION <span aria-hidden="true">⟶</span></button>
            <a class="session-cancel-link" href="${cancelHref}">CANCEL</a>
          </div>
          <p class="session-note-feedback" role="status" aria-live="polite"></p>
        ` : `
          <p>This session note may have been removed.</p>
        `}
      </form>
    `;
  } else if (selectedSession) {
    editor = `
      <article class="session-note-editor session-note-detail">
        <p class="player-feature-eyebrow">SESSION JOURNAL</p>
        <h2>${escapeHtml(selectedSession.title)}</h2>
        <p class="session-note-date">${escapeHtml(selectedSession.date)}</p>
        <p class="session-note-body">${escapeHtml(selectedSession.notes)}</p>
        <div class="session-note-detail-actions">
          <a class="campaign-submit session-edit-button" href="#player/${encodeURIComponent(campaignId)}/notes/${encodeURIComponent(selectedSession.id)}/edit">EDIT SESSION <span aria-hidden="true">✎</span></a>
          <button class="session-delete-button" type="button" data-delete-session="${escapeHtml(selectedSession.id)}" data-campaign-id="${escapeHtml(campaignId)}">DELETE SESSION</button>
        </div>
        <p class="session-delete-feedback" role="status" aria-live="polite"></p>
      </article>
    `;
  } else {
    editor = `
      <div class="session-note-editor session-note-empty-state">
        <span class="session-empty-icon" aria-hidden="true">✧</span>
        <h2>${sessions.length ? "Choose a session" : "Your chronicle begins here"}</h2>
        <p>${sessions.length
          ? "Select a session from your journal to read it, or start a new entry."
          : "After your next gathering, create a session entry to keep its story close."}</p>
        ${sessions.length ? "" : `<a class="campaign-submit session-empty-cta" href="#player/${encodeURIComponent(campaignId)}/notes/new">RECORD YOUR FIRST SESSION <span aria-hidden="true">⟶</span></a>`}
      </div>
    `;
  }

  return renderCampaignShell("player", campaign, campaignId, "notes", `
      <header class="feature-head">
        <h2>Session notes</h2>
        <p>One entry for every time the party gathers.</p>
      </header>
      <div class="session-notes-layout">
        <section class="session-notes-list" aria-labelledby="session-list-heading">
          <div class="campaign-section-heading">
            <h2 id="session-list-heading">Your sessions</h2>
            <span>${sessions.length}</span>
          </div>
          <a class="new-session-button" href="#player/${encodeURIComponent(campaignId)}/notes/new"><span aria-hidden="true">＋</span> NEW SESSION</a>
          <div class="session-note-links">${sessionList}</div>
        </section>
        ${editor}
      </div>
  `);
}

const almanacTypes = {
  npcs: { label: "NPCs", singular: "NPC", icon: "♙" },
  locations: { label: "Locations", singular: "Location", icon: "⌖" },
  factions: { label: "Factions", singular: "Faction", icon: "⚑" },
  lore: { label: "Lore", singular: "Lore entry", icon: "✎" },
};

function getAlmanac(campaign) {
  const almanac = campaign.data.almanac;
  if (almanac === undefined) {
    return { entries: [], npcFields: [] };
  }
  if (
    !almanac ||
    typeof almanac !== "object" ||
    !Array.isArray(almanac.entries) ||
    !Array.isArray(almanac.npcFields) ||
    almanac.npcFields.some(
      (field) =>
        !field ||
        typeof field.id !== "string" ||
        typeof field.name !== "string" ||
        !["text", "number", "select", "checkbox"].includes(field.type) ||
        !Array.isArray(field.options) ||
        field.options.some((option) => typeof option !== "string"),
    ) ||
    almanac.entries.some(
      (entry) =>
        !entry ||
        typeof entry.id !== "string" ||
        !Object.hasOwn(almanacTypes, entry.type) ||
        typeof entry.title !== "string" ||
        typeof entry.body !== "string" ||
        !Array.isArray(entry.tags) ||
        entry.tags.some((tag) => typeof tag !== "string") ||
        !Array.isArray(entry.relatedIds) ||
        entry.relatedIds.some((id) => typeof id !== "string") ||
        !entry.fieldValues ||
        typeof entry.fieldValues !== "object" ||
        Array.isArray(entry.fieldValues),
    )
  ) {
    throw new Error("Saved Almanac data is invalid. The stored data was not changed.");
  }
  return almanac;
}

function almanacHref(role, campaignId, section = "", entryId = "", mode = "") {
  const parts = [role, campaignId, "almanac", section, entryId, mode].filter(Boolean);
  return `#${parts.map((part) => encodeURIComponent(part)).join("/")}`;
}

function renderLoreBody(body) {
  const lines = escapeHtml(body).split(/\r?\n/);
  const blocks = [];
  let listType = "";
  const closeList = () => {
    if (listType) {
      blocks.push(`</${listType}>`);
      listType = "";
    }
  };
  const inline = (text) =>
    text
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  for (const line of lines) {
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    const unorderedItem = line.match(/^\s*[-*]\s+(.+)$/);
    const orderedItem = line.match(/^\s*\d+\.\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      blocks.push(`<h${level}>${inline(heading[2])}</h${level}>`);
    } else if (unorderedItem || orderedItem) {
      const nextType = orderedItem ? "ol" : "ul";
      if (listType !== nextType) {
        closeList();
        listType = nextType;
        blocks.push(`<${listType}>`);
      }
      blocks.push(`<li>${inline((unorderedItem ?? orderedItem)[1])}</li>`);
    } else if (!line.trim()) {
      closeList();
    } else {
      closeList();
      blocks.push(`<p>${inline(line)}</p>`);
    }
  }
  closeList();
  return `<div class="almanac-entry-body">${blocks.join("")}</div>`;
}

function almanacEntryFields(almanac, entry, type) {
  if (type === "npcs") {
    if (!almanac.npcFields.length) {
      return `<p class="almanac-muted">Add custom NPC fields to build your NPC template.</p>`;
    }
    return almanac.npcFields
      .map((field) => {
        const value = entry.fieldValues[field.id];
        const displayValue = field.type === "checkbox"
          ? (value ? "Yes" : "No")
          : value === undefined || value === "" ? "—" : value;
        return `<div class="almanac-attribute"><dt>${escapeHtml(field.name)}</dt><dd>${escapeHtml(String(displayValue))}</dd></div>`;
      })
      .join("");
  }
  return `
    ${entry.category ? `<p class="almanac-category">${escapeHtml(entry.category)}</p>` : ""}
    ${entry.tags.length ? `<ul class="almanac-tags" aria-label="Tags">${entry.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>` : ""}
    ${entry.body
      ? type === "lore" ? renderLoreBody(entry.body) : `<div class="almanac-entry-body">${escapeHtml(entry.body)}</div>`
      : `<p class="almanac-muted">No notes added yet.</p>`}
  `;
}

function renderAlmanac(campaign, role, campaignId, section = "", entryId = "", mode = "") {
  const almanac = getAlmanac(campaign);
  const validSections = Object.keys(almanacTypes);
  const isFieldSettings = section === "npc-fields";
  const selectedType = validSections.includes(section) ? section : "npcs";
  const entries = almanac.entries.filter((entry) => entry.type === selectedType);
  const selectedEntry = entryId && entryId !== "new"
    ? almanac.entries.find((entry) => entry.id === entryId && entry.type === selectedType)
    : null;
  const isNew = entryId === "new";
  const isEditing = isNew || mode === "edit";
  const entryHref = (entry) => almanacHref(role, campaignId, entry.type, entry.id);
  const info = almanacTypes[selectedType];
  const typeTabs = `
    <nav class="almanac-type-tabs" aria-label="Almanac types">
      ${Object.entries(almanacTypes).map(([type, typeInfo]) => {
        const count = almanac.entries.filter((entry) => entry.type === type).length;
        return `
        <a class="almanac-type-tab${selectedType === type ? " is-active" : ""}"
          href="${almanacHref(role, campaignId, type)}"
          ${selectedType === type ? 'aria-current="page"' : ""}>
          <span aria-hidden="true">${typeInfo.icon}</span>${typeInfo.label}<small>${count}</small>
        </a>`;
      }).join("")}
    </nav>
  `;

  const list = entries.length
    ? [...entries].sort((a, b) => a.title.localeCompare(b.title)).map((entry) => {
        const summary = selectedType === "lore"
          ? [entry.category, ...entry.tags].filter(Boolean).join(" · ") || "Lore"
          : selectedType === "npcs"
            ? almanac.npcFields.map((field) => entry.fieldValues[field.id])
                .filter((value) => value !== undefined && value !== "" && value !== false)
                .slice(0, 3).join(" · ") || "NPC"
            : entry.body.split(/\r?\n/)[0].slice(0, 90) || info.singular;
        return `
          <a class="almanac-record-row" href="${entryHref(entry)}">
            <span class="almanac-record-type" aria-hidden="true">${info.icon}</span>
            <strong>${escapeHtml(entry.title)}</strong>
            <span class="almanac-record-summary">${escapeHtml(summary)}</span>
            <span class="almanac-record-arrow" aria-hidden="true">⟶</span>
          </a>`;
      }).join("")
    : `<div class="almanac-empty-row"><p>No ${info.label.toLowerCase()} yet.</p><a href="${almanacHref(role, campaignId, selectedType, "new")}">Add your first ${info.singular.toLowerCase()}</a></div>`;

  let dialog = "";
  if (isFieldSettings) {
    const fields = almanac.npcFields.length
      ? almanac.npcFields.map((field) => `
          <li class="almanac-field-item">
            <span><strong>${escapeHtml(field.name)}</strong><small>${escapeHtml(field.type)}${field.options.length ? ` · ${escapeHtml(field.options.join(", "))}` : ""}</small></span>
            <button class="session-delete-button" type="button" data-remove-npc-field="${escapeHtml(field.id)}">REMOVE</button>
          </li>`).join("")
      : `<li class="almanac-muted">No custom NPC fields yet.</li>`;
    dialog = `
      <dialog class="almanac-dialog" aria-labelledby="almanac-dialog-title">
        <div class="almanac-dialog-content">
          <header class="almanac-dialog-header"><div><p class="player-feature-eyebrow">NPC TEMPLATE</p><h2 id="almanac-dialog-title">Custom fields</h2></div><a class="almanac-dialog-close" href="${almanacHref(role, campaignId, "npcs")}" aria-label="Close">×</a></header>
          <p class="almanac-muted">These attributes are available on every NPC. Name is always included.</p>
          <ul class="almanac-field-list">${fields}</ul>
          <form class="npc-field-form almanac-form" data-role="${role}" data-campaign-id="${escapeHtml(campaignId)}">
            <label for="npc-field-name">Field name</label>
            <input id="npc-field-name" name="name" type="text" maxlength="40" placeholder="e.g. Gender or Age" required />
            <label for="npc-field-type">Field type</label>
            <select id="npc-field-type" name="type">
              <option value="text">Text</option><option value="number">Number</option>
              <option value="select">Single-select dropdown</option><option value="checkbox">Checkbox</option>
            </select>
            <div class="almanac-options-field" hidden>
              <label for="npc-field-options">Dropdown options</label>
              <input id="npc-field-options" name="options" type="text" maxlength="500" placeholder="e.g. Human, Elf, Dwarf" />
              <small>Separate options with commas.</small>
            </div>
            <button class="campaign-submit" type="submit">ADD NPC FIELD <span aria-hidden="true">＋</span></button>
            <p class="almanac-feedback" role="status" aria-live="polite"></p>
          </form>
        </div>
      </dialog>`;
  } else if (entryId) {
    let dialogContent;
    if (entryId !== "new" && !selectedEntry) {
      dialogContent = `<header class="almanac-dialog-header"><div><p class="player-feature-eyebrow">${info.singular.toUpperCase()}</p><h2 id="almanac-dialog-title">Entry not found</h2></div><a class="almanac-dialog-close" href="${almanacHref(role, campaignId, selectedType)}" aria-label="Close">×</a></header><p>This Almanac entry may have been removed.</p>`;
    } else if (isEditing) {
      const entry = selectedEntry;
      const relatedEntries = selectedType === "lore"
        ? almanac.entries.filter((item) => item.type !== "lore" && item.id !== entry?.id)
        : [];
      const related = relatedEntries.length
        ? `<fieldset class="almanac-related-picker"><legend>Related entries</legend>${relatedEntries.map((item) => `
            <label><input type="checkbox" name="relatedIds" value="${escapeHtml(item.id)}" ${entry?.relatedIds.includes(item.id) ? "checked" : ""} />
              <span>${escapeHtml(almanacTypes[item.type].singular)} · ${escapeHtml(item.title)}</span></label>`).join("")}</fieldset>`
        : selectedType === "lore" ? `<p class="almanac-muted">Add NPCs, Locations, or Factions first to link related entries here.</p>` : "";
      const customFields = selectedType === "npcs"
        ? almanac.npcFields.map((field) => {
            const value = entry?.fieldValues[field.id];
            const id = `npc-value-${escapeHtml(field.id)}`;
            if (field.type === "checkbox") {
              return `<label class="almanac-checkbox" for="${id}"><input id="${id}" name="field-${escapeHtml(field.id)}" type="checkbox" ${value ? "checked" : ""} /> ${escapeHtml(field.name)}</label>`;
            }
            if (field.type === "select") {
              return `<label for="${id}">${escapeHtml(field.name)}</label><select id="${id}" name="field-${escapeHtml(field.id)}"><option value="">Choose…</option>${field.options.map((option) => `<option value="${escapeHtml(option)}" ${value === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
            }
            return `<label for="${id}">${escapeHtml(field.name)}</label><input id="${id}" name="field-${escapeHtml(field.id)}" type="${field.type}" value="${escapeHtml(String(value ?? ""))}" />`;
          }).join("")
        : "";
      const otherFields = selectedType === "npcs" ? "" : `
          ${selectedType === "lore" ? `
            <label for="almanac-category">Category <span>(optional)</span></label>
            <input id="almanac-category" name="category" type="text" maxlength="60" value="${escapeHtml(entry?.category ?? "")}" placeholder="e.g. History, Religion, Places" />
            <label for="almanac-tags">Tags <span>(optional, comma-separated)</span></label>
            <input id="almanac-tags" name="tags" type="text" maxlength="300" value="${escapeHtml(entry?.tags.join(", ") ?? "")}" placeholder="e.g. ancient, prophecy" />` : ""}
          <label for="almanac-body">${selectedType === "lore" ? "Lore and notes" : "Description and notes"} <span>(optional)</span></label>
          <textarea id="almanac-body" name="body" rows="8" maxlength="12000" placeholder="${selectedType === "lore" ? "Use # headings, - bullets, **bold**, or *italic* for simple formatting." : `What should you remember about this ${info.singular.toLowerCase()}?`}">${escapeHtml(entry?.body ?? "")}</textarea>
          ${related}`;
      dialogContent = `
        <header class="almanac-dialog-header"><div><p class="player-feature-eyebrow">${isNew ? `A NEW ${info.singular.toUpperCase()}` : `EDIT ${info.singular.toUpperCase()}`}</p><h2 id="almanac-dialog-title">${isNew ? `Add ${info.singular}` : `Edit ${info.singular}`}</h2></div><a class="almanac-dialog-close" href="${almanacHref(role, campaignId, selectedType)}" aria-label="Close">×</a></header>
        <form class="almanac-form almanac-entry-form" data-role="${role}" data-campaign-id="${escapeHtml(campaignId)}" data-type="${selectedType}" data-entry-id="${entry ? escapeHtml(entry.id) : ""}">
          <label for="almanac-title">${selectedType === "npcs" ? "Name" : "Title"}</label>
          <input id="almanac-title" name="title" type="text" maxlength="100" value="${escapeHtml(entry?.title ?? "")}" required />
          ${selectedType === "npcs" ? customFields : otherFields}
          <div class="session-note-form-actions">
            <button class="campaign-submit" type="submit">SAVE ${info.singular.toUpperCase()} <span aria-hidden="true">⟶</span></button>
            <a class="session-cancel-link" href="${almanacHref(role, campaignId, selectedType)}">CANCEL</a>
          </div>
          <p class="almanac-feedback" role="status" aria-live="polite"></p>
        </form>`;
    } else {
      const backlinks = selectedType === "lore" ? [] : almanac.entries.filter((item) => item.type === "lore" && item.relatedIds.includes(selectedEntry.id));
      dialogContent = `
        <header class="almanac-dialog-header"><div><p class="player-feature-eyebrow">${info.singular.toUpperCase()}</p><h2 id="almanac-dialog-title">${escapeHtml(selectedEntry.title)}</h2></div><a class="almanac-dialog-close" href="${almanacHref(role, campaignId, selectedType)}" aria-label="Close">×</a></header>
        ${selectedType === "npcs" ? `<dl class="almanac-attributes">${almanacEntryFields(almanac, selectedEntry, selectedType)}</dl>` : almanacEntryFields(almanac, selectedEntry, selectedType)}
        ${selectedType === "lore" && selectedEntry.relatedIds.length ? `<section class="almanac-related-list"><h3>Related entries</h3><ul>${selectedEntry.relatedIds.map((id) => {
          const linked = almanac.entries.find((item) => item.id === id && item.type !== "lore");
          return linked ? `<li><a href="${entryHref(linked)}">${escapeHtml(almanacTypes[linked.type].singular)} · ${escapeHtml(linked.title)}</a></li>` : "";
        }).join("")}</ul></section>` : ""}
        ${backlinks.length ? `<section class="almanac-related-list"><h3>Linked lore</h3><ul>${backlinks.map((lore) => `<li><a href="${entryHref(lore)}">${escapeHtml(lore.title)}</a></li>`).join("")}</ul></section>` : ""}
        <div class="session-note-detail-actions">
          <a class="campaign-submit session-edit-button" href="${almanacHref(role, campaignId, selectedType, selectedEntry.id, "edit")}">EDIT ENTRY <span aria-hidden="true">✎</span></a>
          <button class="session-delete-button" type="button" data-delete-almanac-entry="${escapeHtml(selectedEntry.id)}" data-role="${role}" data-campaign-id="${escapeHtml(campaignId)}">DELETE</button>
        </div>
        <p class="almanac-feedback" role="status" aria-live="polite"></p>`;
    }
    dialog = `<dialog class="almanac-dialog" aria-labelledby="almanac-dialog-title"><div class="almanac-dialog-content">${dialogContent}</div></dialog>`;
  }

  const content = `
    <section class="almanac-records" aria-labelledby="almanac-list-heading">
      <header class="almanac-records-heading">
        <div><h2 id="almanac-list-heading">${info.label}</h2><p>${entries.length} ${entries.length === 1 ? "record" : "records"}</p></div>
        <div class="almanac-record-actions">
          ${selectedType === "npcs" ? `<a class="almanac-secondary-action" href="${almanacHref(role, campaignId, "npc-fields")}">⚙ &nbsp; NPC FIELDS</a>` : ""}
          <a class="campaign-submit almanac-add-button" href="${almanacHref(role, campaignId, selectedType, "new")}">＋ &nbsp; ADD ${info.singular.toUpperCase()}</a>
        </div>
      </header>
      <div class="almanac-record-list">${list}</div>
    </section>`;

  return renderCampaignShell(role, campaign, campaignId, "almanac", `
      <header class="feature-head">
        <h2>Almanac</h2>
        <p>Your private campaign reference for people, places, factions, and lore.</p>
      </header>
      ${typeTabs}
      ${content}
      ${dialog}
  `);
}

function renderCharacterSheet(campaign, campaignId) {
  const existing = getCharacterSheet(campaign);
  const sheet = normalizeCharacterSheet(existing);
  const level = Number.isInteger(sheet.level) && sheet.level >= 1 && sheet.level <= 20 ? sheet.level : 1;
  const proficiencyBonus = proficiencyBonusForLevel(level);
  const skillBonus = (skill) => {
    const mod = abilityModifier(sheet.abilities[skill.ability]);
    const prof = sheet.skillProficiencies[skill.key];
    return mod + (prof === "proficient" ? proficiencyBonus : 0) + (prof === "expertise" ? proficiencyBonus : 0);
  };
  const perceptionBonus = skillBonus(skillList.find((skill) => skill.key === "perception"));
  const castMod = abilityModifier(sheet.abilities[sheet.spellcasting.ability]);
  const spellSaveDc = 8 + castMod + proficiencyBonus;
  const spellAttackBonus = castMod + proficiencyBonus;

  const abilityCards = abilityKeys.map((ability) => `
    <div class="ability-card">
      <label for="sheet-${ability}">${ability.slice(0, 3).toUpperCase()}<small>${ability}</small></label>
      <strong class="ability-mod">${formatBonus(abilityModifier(sheet.abilities[ability]))}</strong>
      <input id="sheet-${ability}" name="ability-${ability}" type="number" min="1" max="30" value="${sheet.abilities[ability]}" required />
    </div>`).join("");

  const saveRows = abilityKeys.map((ability) => {
    const bonus = abilityModifier(sheet.abilities[ability]) + (sheet.saveProficiencies[ability] ? proficiencyBonus : 0);
    return `
    <label class="save-row">
      <span class="sheet-bonus">${formatBonus(bonus)}</span>
      <input type="checkbox" name="save-${ability}" ${sheet.saveProficiencies[ability] ? "checked" : ""} />
      <span>${ability.charAt(0).toUpperCase()}${ability.slice(1)}</span>
    </label>`;
  }).join("");

  const skillRows = skillList.map((skill) => `
    <label class="skill-row">
      <span class="sheet-bonus">${formatBonus(skillBonus(skill))}</span>
      <select name="skill-${skill.key}" aria-label="${skill.label} proficiency">
        <option value=""${sheet.skillProficiencies[skill.key] === "" ? " selected" : ""}>—</option>
        <option value="proficient"${sheet.skillProficiencies[skill.key] === "proficient" ? " selected" : ""}>P</option>
        <option value="expertise"${sheet.skillProficiencies[skill.key] === "expertise" ? " selected" : ""}>E</option>
      </select>
      <span>${skill.label} <small>${skill.ability.slice(0, 3).toUpperCase()}</small></span>
    </label>`).join("");

  const attackRows = sheet.attacks.map((attack) => `
    <div class="attack-row" data-attack-row data-row-id="${escapeHtml(attack.id)}">
      <input class="attack-name" type="text" maxlength="60" placeholder="Weapon or attack" value="${escapeHtml(attack.name)}" aria-label="Attack name" />
      <input class="attack-bonus" type="text" maxlength="12" placeholder="+5" value="${escapeHtml(attack.bonus)}" aria-label="Attack bonus" />
      <input class="attack-damage" type="text" maxlength="40" placeholder="1d8+3 slashing" value="${escapeHtml(attack.damage)}" aria-label="Damage and type" />
      <button type="button" data-remove-row aria-label="Remove attack">×</button>
    </div>`).join("");

  const slotCards = Array.from({ length: 9 }, (_, index) => {
    const slotLevel = index + 1;
    const slot = sheet.spellcasting.slots[slotLevel];
    return `
    <div class="slot-card">
      <span>LEVEL ${slotLevel}</span>
      <label>TOTAL<input name="slot-${slotLevel}-total" type="number" min="0" max="30" value="${slot.total}" /></label>
      <label>USED<input name="slot-${slotLevel}-used" type="number" min="0" max="30" value="${slot.used}" /></label>
    </div>`;
  }).join("");

  const spellLevelOptions = (selected) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((slotLevel) =>
    `<option value="${slotLevel}"${selected === slotLevel ? " selected" : ""}>${slotLevel === 0 ? "Cantrip" : `Level ${slotLevel}`}</option>`).join("");

  const spellRows = sheet.spells.map((spell) => `
    <div class="spell-row" data-spell-row data-row-id="${escapeHtml(spell.id)}">
      <input class="spell-name" type="text" maxlength="80" placeholder="Spell name" value="${escapeHtml(spell.name)}" aria-label="Spell name" />
      <select class="spell-level" aria-label="Spell level">${spellLevelOptions(spell.level)}</select>
      <label class="spell-prepared"><input class="spell-prepared-box" type="checkbox" ${spell.prepared ? "checked" : ""} /> PREP</label>
      <button type="button" data-remove-row aria-label="Remove spell">×</button>
    </div>`).join("");

  const roleplay = sheet.roleplay;
  return renderCampaignShell("player", campaign, campaignId, "character", `
      <header class="feature-head">
        <h2>${existing ? escapeHtml(sheet.name) : "Your character sheet"}</h2>
        <p>${existing ? "Core for the table, Magic for casting, Roleplay for the story." : "Build your character sheet, then export it to send to your Game Master."}</p>
      </header>
      <form class="character-sheet-form" data-campaign-id="${escapeHtml(campaignId)}">
        <section class="sheet-identity" aria-label="Identity">
          <label for="sheet-name">Character name<input id="sheet-name" name="name" type="text" maxlength="80" value="${escapeHtml(sheet.name)}" required /></label>
          <label for="sheet-class">Class<input id="sheet-class" name="characterClass" type="text" maxlength="60" value="${escapeHtml(sheet.characterClass)}" required /></label>
          <label for="sheet-level">Level<input id="sheet-level" name="level" type="number" min="1" max="20" value="${level}" required /></label>
          <label for="sheet-species">Species<input id="sheet-species" name="species" type="text" maxlength="60" value="${escapeHtml(sheet.species)}" required /></label>
          <label for="sheet-background">Background<input id="sheet-background" name="background" type="text" maxlength="60" value="${escapeHtml(sheet.background)}" /></label>
          <label for="sheet-alignment">Alignment<input id="sheet-alignment" name="alignment" type="text" maxlength="60" value="${escapeHtml(sheet.alignment)}" /></label>
          <label for="sheet-experience">Experience<input id="sheet-experience" name="experience" type="number" min="0" max="9999999" value="${sheet.experience}" /></label>
          <label for="sheet-player-name">Player name<input id="sheet-player-name" name="playerName" type="text" maxlength="80" value="${escapeHtml(sheet.playerName)}" /></label>
        </section>
        <div class="sheet-tabs" role="tablist" aria-label="Character sheet sections">
          <button class="sheet-tab" type="button" role="tab" aria-selected="true" data-sheet-tab="core">CORE</button>
          <button class="sheet-tab" type="button" role="tab" aria-selected="false" data-sheet-tab="magic">MAGIC <small>${sheet.spells.length}</small></button>
          <button class="sheet-tab" type="button" role="tab" aria-selected="false" data-sheet-tab="roleplay">ROLEPLAY</button>
        </div>
        <section data-sheet-section="core" role="tabpanel" aria-label="Core">
          <div class="sheet-grid-core">
            <div class="sheet-col">
              <div class="ability-grid">${abilityCards}</div>
              <label class="inspiration-row"><input type="checkbox" name="inspiration" ${sheet.inspiration ? "checked" : ""} /> INSPIRATION</label>
              <p class="proficiency-line">PROFICIENCY BONUS <strong>${formatBonus(proficiencyBonus)}</strong> <small>auto from level ${level}</small></p>
              <h3>Saving throws</h3>
              <div class="save-list">${saveRows}</div>
              <h3>Skills <small>P proficient · E expertise</small></h3>
              <div class="skill-list">${skillRows}</div>
              <p class="proficiency-line">PASSIVE PERCEPTION <strong>${10 + perceptionBonus}</strong></p>
              <p class="sheet-hint">Modifiers, saves, skills, and spell numbers recalculate when you save.</p>
            </div>
            <div class="sheet-col">
              <div class="combat-shields">
                <label for="sheet-ac">AC<input id="sheet-ac" name="armorClass" type="number" min="0" max="99" value="${sheet.armorClass}" required /></label>
                <label for="sheet-initiative">INIT<input id="sheet-initiative" name="initiativeModifier" type="number" min="-20" max="20" value="${sheet.initiativeModifier}" required /></label>
                <label for="sheet-speed">SPD<input id="sheet-speed" name="speed" type="number" min="0" max="999" value="${sheet.speed}" /></label>
              </div>
              <div class="hp-block">
                <label for="sheet-max-hp">MAX HP<input id="sheet-max-hp" name="maxHp" type="number" min="1" max="999" value="${sheet.maxHp}" required /></label>
                <label for="sheet-current-hp">CURRENT<input id="sheet-current-hp" name="currentHp" type="number" min="0" max="999" value="${sheet.currentHp}" required /></label>
                <label for="sheet-temp-hp">TEMP<input id="sheet-temp-hp" name="tempHp" type="number" min="0" max="999" value="${sheet.tempHp}" /></label>
              </div>
              <div class="hit-dice-row">
                <label for="sheet-hit-dice">HIT DICE<input id="sheet-hit-dice" name="hitDiceTotal" type="text" maxlength="12" placeholder="e.g. 3d8" value="${escapeHtml(sheet.hitDiceTotal)}" /></label>
                <label for="sheet-hit-dice-used">USED<input id="sheet-hit-dice-used" name="hitDiceUsed" type="number" min="0" max="99" value="${sheet.hitDiceUsed}" /></label>
                <label for="sheet-death-successes">DEATH SAVES ✓<input id="sheet-death-successes" name="deathSuccesses" type="number" min="0" max="3" value="${sheet.deathSaves.successes}" /></label>
                <label for="sheet-death-failures">✗<input id="sheet-death-failures" name="deathFailures" type="number" min="0" max="3" value="${sheet.deathSaves.failures}" /></label>
              </div>
              <h3>Attacks</h3>
              <div class="attack-head"><span>NAME</span><span>BONUS</span><span>DAMAGE / TYPE</span><span></span></div>
              <div data-attack-list>${attackRows}</div>
              <button class="sheet-add-button" type="button" data-add-attack>＋ ADD ATTACK</button>
            </div>
            <div class="sheet-col">
              <h3>Features &amp; traits</h3>
              <label class="visually-hidden" for="sheet-features">Features and traits</label>
              <textarea id="sheet-features" name="features" rows="7" maxlength="6000" placeholder="Racial traits, class features, feats…">${escapeHtml(sheet.features)}</textarea>
              <h3>Proficiencies &amp; languages</h3>
              <label class="visually-hidden" for="sheet-proficiencies">Proficiencies and languages</label>
              <textarea id="sheet-proficiencies" name="proficiencies" rows="4" maxlength="3000" placeholder="Armor, weapons, tools, languages…">${escapeHtml(sheet.proficiencies)}</textarea>
              <h3>Equipment</h3>
              <label class="visually-hidden" for="sheet-equipment">Equipment</label>
              <textarea id="sheet-equipment" name="equipment" rows="6" maxlength="6000" placeholder="Weapons, gear, treasure…">${escapeHtml(sheet.equipment)}</textarea>
              <div class="currency-row">
                ${["cp", "sp", "ep", "gp", "pp"].map((coin) => `
                  <label for="sheet-coin-${coin}">${coin.toUpperCase()}<input id="sheet-coin-${coin}" name="coin-${coin}" type="number" min="0" max="999999" value="${sheet.currency[coin]}" /></label>`).join("")}
              </div>
            </div>
          </div>
        </section>
        <section data-sheet-section="magic" role="tabpanel" aria-label="Magic" hidden>
          <div class="casting-head">
            <label for="sheet-casting-class">Spellcasting class<input id="sheet-casting-class" name="castingClass" type="text" maxlength="60" placeholder="e.g. Wizard" value="${escapeHtml(sheet.spellcasting.class)}" /></label>
            <label for="sheet-casting-ability">Spellcasting ability
              <select id="sheet-casting-ability" name="castingAbility">
                ${spellAbilityKeys.map((ability) => `<option value="${ability}"${sheet.spellcasting.ability === ability ? " selected" : ""}>${ability.charAt(0).toUpperCase()}${ability.slice(1)}</option>`).join("")}
              </select>
            </label>
            <p class="casting-derived"><span>SAVE DC <strong>${spellSaveDc}</strong></span><span>ATTACK <strong>${formatBonus(spellAttackBonus)}</strong></span><small>auto from ${sheet.spellcasting.ability} + proficiency</small></p>
          </div>
          <h3>Spell slots</h3>
          <div class="slot-grid">${slotCards}</div>
          <h3>Spells known</h3>
          <div class="spell-head"><span>NAME</span><span>LEVEL</span><span>PREP</span><span></span></div>
          <div data-spell-list>${spellRows}</div>
          <button class="sheet-add-button" type="button" data-add-spell>＋ ADD SPELL</button>
        </section>
        <section data-sheet-section="roleplay" role="tabpanel" aria-label="Roleplay" hidden>
          <h3>Appearance</h3>
          <div class="appearance-grid">
            ${[["age", "Age"], ["height", "Height"], ["weight", "Weight"], ["eyes", "Eyes"], ["skin", "Skin"], ["hair", "Hair"]].map(([key, label]) => `
              <label for="sheet-rp-${key}">${label}<input id="sheet-rp-${key}" name="rp-${key}" type="text" maxlength="40" value="${escapeHtml(roleplay[key])}" /></label>`).join("")}
          </div>
          <div class="roleplay-grid">
            ${[["traits", "Personality traits"], ["ideals", "Ideals"], ["bonds", "Bonds"], ["flaws", "Flaws"]].map(([key, label]) => `
              <label for="sheet-rp-${key}">${label}<textarea id="sheet-rp-${key}" name="rp-${key}" rows="4" maxlength="2000">${escapeHtml(roleplay[key])}</textarea></label>`).join("")}
          </div>
          <label for="sheet-rp-backstory">Character backstory<textarea id="sheet-rp-backstory" name="rp-backstory" rows="8" maxlength="12000">${escapeHtml(roleplay.backstory)}</textarea></label>
          <label for="sheet-rp-allies">Allies &amp; organizations<textarea id="sheet-rp-allies" name="rp-allies" rows="4" maxlength="6000">${escapeHtml(roleplay.allies)}</textarea></label>
          <label for="sheet-notes">Notes<textarea id="sheet-notes" name="notes" rows="4" maxlength="6000">${escapeHtml(sheet.notes)}</textarea></label>
        </section>
        <div class="sheet-savebar">
          <button class="campaign-submit sheet-save-button" type="submit">SAVE CHARACTER SHEET <span aria-hidden="true">⟶</span></button>
          ${existing ? `<button class="almanac-secondary-action" type="button" data-export-character>EXPORT SHEET</button>` : ""}
          <p class="character-sheet-feedback" role="status" aria-live="polite"></p>
        </div>
      </form>
  `);
}

const standardConditions = [
  "Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled",
  "Incapacitated", "Invisible", "Paralyzed", "Petrified", "Poisoned", "Prone",
  "Restrained", "Stunned", "Unconscious",
];

const testPartySheets = [
  {
    id: "party-vault-test-aelar",
    name: "Aelar Thornwood",
    playerName: "Test Player 1",
    characterClass: "Ranger",
    species: "Elf",
    level: 3,
    armorClass: 15,
    maxHp: 28,
    currentHp: 28,
    initiativeModifier: 3,
    abilities: { strength: 12, dexterity: 16, constitution: 14, intelligence: 10, wisdom: 15, charisma: 11 },
    notes: "A keen-eyed scout who knows the old forest paths.",
  },
  {
    id: "party-vault-test-brunna",
    name: "Brunna Ironvale",
    playerName: "Test Player 2",
    characterClass: "Cleric",
    species: "Dwarf",
    level: 3,
    armorClass: 18,
    maxHp: 27,
    currentHp: 27,
    initiativeModifier: 0,
    abilities: { strength: 14, dexterity: 10, constitution: 16, intelligence: 10, wisdom: 16, charisma: 12 },
    notes: "A steadfast healer carrying a well-worn holy symbol.",
  },
  {
    id: "party-vault-test-mira",
    name: "Mira Quickfoot",
    playerName: "Test Player 3",
    characterClass: "Rogue",
    species: "Halfling",
    level: 3,
    armorClass: 15,
    maxHp: 21,
    currentHp: 21,
    initiativeModifier: 4,
    abilities: { strength: 9, dexterity: 17, constitution: 13, intelligence: 14, wisdom: 12, charisma: 14 },
    notes: "A nimble scout with a knack for locks and old ruins.",
  },
  {
    id: "party-vault-test-torren",
    name: "Torren Ashfall",
    playerName: "Test Player 4",
    characterClass: "Fighter",
    species: "Human",
    level: 3,
    armorClass: 17,
    maxHp: 31,
    currentHp: 31,
    initiativeModifier: 1,
    abilities: { strength: 16, dexterity: 12, constitution: 15, intelligence: 10, wisdom: 13, charisma: 11 },
    notes: "A practical front-line defender who protects the group.",
  },
];

const abilityKeys = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

const skillList = [
  { key: "acrobatics", label: "Acrobatics", ability: "dexterity" },
  { key: "animalHandling", label: "Animal Handling", ability: "wisdom" },
  { key: "arcana", label: "Arcana", ability: "intelligence" },
  { key: "athletics", label: "Athletics", ability: "strength" },
  { key: "deception", label: "Deception", ability: "charisma" },
  { key: "history", label: "History", ability: "intelligence" },
  { key: "insight", label: "Insight", ability: "wisdom" },
  { key: "intimidation", label: "Intimidation", ability: "charisma" },
  { key: "investigation", label: "Investigation", ability: "intelligence" },
  { key: "medicine", label: "Medicine", ability: "wisdom" },
  { key: "nature", label: "Nature", ability: "intelligence" },
  { key: "perception", label: "Perception", ability: "wisdom" },
  { key: "performance", label: "Performance", ability: "charisma" },
  { key: "persuasion", label: "Persuasion", ability: "charisma" },
  { key: "religion", label: "Religion", ability: "intelligence" },
  { key: "sleightOfHand", label: "Sleight of Hand", ability: "dexterity" },
  { key: "stealth", label: "Stealth", ability: "dexterity" },
  { key: "survival", label: "Survival", ability: "wisdom" },
];

const spellAbilityKeys = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

function abilityModifier(score) {
  return Math.floor((score - 10) / 2);
}

function proficiencyBonusForLevel(level) {
  return 2 + Math.floor((level - 1) / 4);
}

function formatBonus(value) {
  return `${value >= 0 ? "+" : ""}${value}`;
}

function newRecordId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeCharacterSheet(sheet) {
  const source = sheet && typeof sheet === "object" ? sheet : {};
  const rawAbilities = source.abilities && typeof source.abilities === "object" ? source.abilities : {};
  const abilities = {};
  for (const ability of abilityKeys) {
    const score = rawAbilities[ability];
    abilities[ability] = Number.isInteger(score) ? Math.min(30, Math.max(1, score)) : 10;
  }
  const rawSaves = source.saveProficiencies && typeof source.saveProficiencies === "object" ? source.saveProficiencies : {};
  const saveProficiencies = {};
  for (const ability of abilityKeys) {
    saveProficiencies[ability] = rawSaves[ability] === true;
  }
  const rawSkills = source.skillProficiencies && typeof source.skillProficiencies === "object" ? source.skillProficiencies : {};
  const skillProficiencies = {};
  for (const skill of skillList) {
    skillProficiencies[skill.key] = rawSkills[skill.key] === "proficient" || rawSkills[skill.key] === "expertise"
      ? rawSkills[skill.key]
      : "";
  }
  const attacks = Array.isArray(source.attacks)
    ? source.attacks.filter((attack) => attack && typeof attack === "object").slice(0, 12).map((attack) => ({
      id: typeof attack.id === "string" && attack.id ? attack.id : newRecordId(),
      name: typeof attack.name === "string" ? attack.name.slice(0, 60) : "",
      bonus: typeof attack.bonus === "string" ? attack.bonus.slice(0, 12) : "",
      damage: typeof attack.damage === "string" ? attack.damage.slice(0, 40) : "",
    }))
    : [];
  const rawCurrency = source.currency && typeof source.currency === "object" ? source.currency : {};
  const currency = {};
  for (const coin of ["cp", "sp", "ep", "gp", "pp"]) {
    currency[coin] = Number.isInteger(rawCurrency[coin]) && rawCurrency[coin] >= 0 ? Math.min(999999, rawCurrency[coin]) : 0;
  }
  const rawCasting = source.spellcasting && typeof source.spellcasting === "object" ? source.spellcasting : {};
  const rawSlots = rawCasting.slots && typeof rawCasting.slots === "object" ? rawCasting.slots : {};
  const slots = {};
  for (let level = 1; level <= 9; level += 1) {
    const raw = rawSlots[level] && typeof rawSlots[level] === "object" ? rawSlots[level] : {};
    slots[level] = {
      total: Number.isInteger(raw.total) && raw.total >= 0 ? Math.min(30, raw.total) : 0,
      used: Number.isInteger(raw.used) && raw.used >= 0 ? raw.used : 0,
    };
    if (slots[level].used > slots[level].total) {
      slots[level].used = slots[level].total;
    }
  }
  const spells = Array.isArray(source.spells)
    ? source.spells.filter((spell) => spell && typeof spell === "object").slice(0, 60).map((spell) => ({
      id: typeof spell.id === "string" && spell.id ? spell.id : newRecordId(),
      name: typeof spell.name === "string" ? spell.name.slice(0, 80) : "",
      level: Number.isInteger(spell.level) && spell.level >= 0 && spell.level <= 9 ? spell.level : 0,
      prepared: spell.prepared === true,
    }))
    : [];
  const rawRoleplay = source.roleplay && typeof source.roleplay === "object" ? source.roleplay : {};
  const roleplayText = (value, max) => (typeof value === "string" ? value.slice(0, max) : "");
  const rawDeath = source.deathSaves && typeof source.deathSaves === "object" ? source.deathSaves : {};
  const clampDeath = (value) => (Number.isInteger(value) && value >= 0 ? Math.min(3, value) : 0);
  return {
    id: typeof source.id === "string" ? source.id : "",
    name: typeof source.name === "string" ? source.name : "",
    playerName: typeof source.playerName === "string" ? source.playerName : "",
    characterClass: typeof source.characterClass === "string" ? source.characterClass : "",
    species: typeof source.species === "string" ? source.species : "",
    background: roleplayText(source.background, 60),
    alignment: roleplayText(source.alignment, 60),
    experience: Number.isInteger(source.experience) && source.experience >= 0 ? Math.min(9999999, source.experience) : 0,
    level: Number.isInteger(source.level) ? source.level : 1,
    armorClass: Number.isInteger(source.armorClass) ? source.armorClass : 10,
    maxHp: Number.isInteger(source.maxHp) ? source.maxHp : 1,
    currentHp: Number.isInteger(source.currentHp) ? source.currentHp : 1,
    tempHp: Number.isInteger(source.tempHp) && source.tempHp >= 0 ? Math.min(999, source.tempHp) : 0,
    initiativeModifier: Number.isInteger(source.initiativeModifier) ? source.initiativeModifier : 0,
    speed: Number.isInteger(source.speed) && source.speed >= 0 ? Math.min(999, source.speed) : 30,
    inspiration: source.inspiration === true,
    abilities,
    saveProficiencies,
    skillProficiencies,
    hitDiceTotal: roleplayText(source.hitDiceTotal, 12),
    hitDiceUsed: Number.isInteger(source.hitDiceUsed) && source.hitDiceUsed >= 0 ? Math.min(99, source.hitDiceUsed) : 0,
    deathSaves: { successes: clampDeath(rawDeath.successes), failures: clampDeath(rawDeath.failures) },
    attacks,
    features: roleplayText(source.features, 6000),
    proficiencies: roleplayText(source.proficiencies, 3000),
    equipment: roleplayText(source.equipment, 6000),
    currency,
    spellcasting: {
      class: roleplayText(rawCasting.class, 60),
      ability: spellAbilityKeys.includes(rawCasting.ability) ? rawCasting.ability : "intelligence",
      slots,
    },
    spells,
    notes: roleplayText(source.notes, 6000),
    roleplay: {
      traits: roleplayText(rawRoleplay.traits, 2000),
      ideals: roleplayText(rawRoleplay.ideals, 2000),
      bonds: roleplayText(rawRoleplay.bonds, 2000),
      flaws: roleplayText(rawRoleplay.flaws, 2000),
      backstory: roleplayText(rawRoleplay.backstory, 12000),
      allies: roleplayText(rawRoleplay.allies, 6000),
      age: roleplayText(rawRoleplay.age, 40),
      height: roleplayText(rawRoleplay.height, 40),
      weight: roleplayText(rawRoleplay.weight, 40),
      eyes: roleplayText(rawRoleplay.eyes, 40),
      skin: roleplayText(rawRoleplay.skin, 40),
      hair: roleplayText(rawRoleplay.hair, 40),
    },
  };
}

function getCharacterSheet(campaign) {
  const sheet = campaign.data.characterSheet;
  if (sheet === undefined) {
    return null;
  }
  if (
    !sheet ||
    typeof sheet !== "object" ||
    typeof sheet.id !== "string" ||
    typeof sheet.name !== "string" ||
    typeof sheet.playerName !== "string" ||
    typeof sheet.characterClass !== "string" ||
    typeof sheet.species !== "string" ||
    !Number.isInteger(sheet.level) ||
    !Number.isInteger(sheet.armorClass) ||
    !Number.isInteger(sheet.maxHp) ||
    !Number.isInteger(sheet.currentHp) ||
    !Number.isInteger(sheet.initiativeModifier) ||
    typeof sheet.notes !== "string" ||
    !sheet.abilities ||
    !sheet.name.trim() ||
    sheet.name.length > 80 ||
    sheet.playerName.length > 80 ||
    !sheet.characterClass.trim() ||
    sheet.characterClass.length > 60 ||
    !sheet.species.trim() ||
    sheet.species.length > 60 ||
    sheet.notes.length > 6000 ||
    sheet.level < 1 || sheet.level > 20 ||
    sheet.armorClass < 0 || sheet.armorClass > 99 ||
    sheet.maxHp < 1 || sheet.currentHp < 0 || sheet.currentHp > sheet.maxHp ||
    sheet.initiativeModifier < -20 || sheet.initiativeModifier > 20 ||
    ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]
      .some((ability) => !Number.isInteger(sheet.abilities[ability]) || sheet.abilities[ability] < 1 || sheet.abilities[ability] > 30)
  ) {
    throw new Error("Saved character sheet data is invalid. The stored data was not changed.");
  }
  return sheet;
}

function getSessionDashboard(campaign) {
  const dashboard = campaign.data.sessionDashboard;
  if (dashboard === undefined) {
    return { roster: [], encounter: null };
  }
  if (
    !dashboard ||
    typeof dashboard !== "object" ||
    !Array.isArray(dashboard.roster) ||
    dashboard.roster.some((player) =>
      !player ||
      typeof player.characterId !== "string" ||
      !player.sheet ||
      typeof player.sheet.id !== "string" ||
      typeof player.sheet.playerName !== "string" ||
      typeof player.sheet.name !== "string" ||
      typeof player.sheet.characterClass !== "string" ||
      typeof player.sheet.species !== "string" ||
      typeof player.sheet.notes !== "string" ||
      !player.sheet.abilities ||
      typeof player.sheet.abilities !== "object" ||
      !Number.isInteger(player.sheet.level) ||
      !Number.isInteger(player.sheet.armorClass) ||
      !Number.isInteger(player.sheet.maxHp) ||
      !Number.isInteger(player.sheet.initiativeModifier) ||
      ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]
        .some((ability) => !Number.isInteger(player.sheet.abilities[ability])) ||
      !Number.isInteger(player.currentHp) ||
      player.sheet.maxHp < 1 ||
      player.currentHp < 0 ||
      player.currentHp > player.sheet.maxHp ||
      (player.initiative !== undefined && player.initiative !== null && !Number.isInteger(player.initiative)) ||
      !Array.isArray(player.conditions) ||
      player.conditions.some((condition) =>
        !condition ||
        typeof condition.id !== "string" ||
        !standardConditions.includes(condition.name) ||
        typeof condition.note !== "string" ||
        typeof condition.duration !== "string"
      )
    ) ||
    (dashboard.encounter !== null && (
      !dashboard.encounter ||
      !Array.isArray(dashboard.encounter.playerIds) ||
      dashboard.encounter.playerIds.some((id) => typeof id !== "string") ||
      !Array.isArray(dashboard.encounter.combatants) ||
      !Number.isInteger(dashboard.encounter.turnIndex) ||
      dashboard.encounter.turnIndex < 0 ||
      dashboard.encounter.combatants.some((combatant) =>
        !combatant ||
        typeof combatant.id !== "string" ||
        typeof combatant.name !== "string" ||
        !Number.isInteger(combatant.initiative)
      )
    ))
  ) {
    throw new Error("Saved session dashboard data is invalid. The stored data was not changed.");
  }
  return dashboard;
}

function renderSessionDashboard(campaign, campaignId) {
  const dashboard = getSessionDashboard(campaign);
  const roster = dashboard.roster;
  const encounter = dashboard.encounter;
  const rosterRows = roster.length
    ? roster.map((player) => `
        <article class="dashboard-player">
          <details class="dashboard-player-sheet">
            <summary><span class="dashboard-player-avatar" aria-hidden="true">${escapeHtml(player.sheet.name.slice(0, 1).toUpperCase())}</span>
              <span class="dashboard-player-identity"><strong>${escapeHtml(player.sheet.name)}</strong><small>${escapeHtml(player.sheet.characterClass)} · Level ${player.sheet.level}${player.sheet.playerName ? ` · ${escapeHtml(player.sheet.playerName)}` : ""}</small></span>
              <span class="dashboard-player-expand">SHEET⌄</span>
            </summary>
            <div class="dashboard-sheet-details">
              <span>Species <strong>${escapeHtml(player.sheet.species)}</strong></span>
              <span>AC <strong>${player.sheet.armorClass}</strong></span>
              <span>Initiative <strong>${player.sheet.initiativeModifier >= 0 ? "+" : ""}${player.sheet.initiativeModifier}</strong></span>
              <span>STR ${player.sheet.abilities.strength} · DEX ${player.sheet.abilities.dexterity} · CON ${player.sheet.abilities.constitution}</span>
              <span>INT ${player.sheet.abilities.intelligence} · WIS ${player.sheet.abilities.wisdom} · CHA ${player.sheet.abilities.charisma}</span>
              ${player.sheet.notes ? `<p>${escapeHtml(player.sheet.notes)}</p>` : ""}
              <button class="dashboard-remove-player" type="button" data-remove-roster-player="${escapeHtml(player.characterId)}" data-campaign-id="${escapeHtml(campaignId)}">REMOVE FROM ROSTER</button>
            </div>
          </details>
          <form class="dashboard-hp-form" data-character-id="${escapeHtml(player.characterId)}" data-campaign-id="${escapeHtml(campaignId)}">
            <label>HP <input name="currentHp" type="number" min="0" max="${player.sheet.maxHp}" value="${player.currentHp}" aria-label="${escapeHtml(player.sheet.name)} current hit points" /></label>
            <span>/ ${player.sheet.maxHp}</span><button type="submit" aria-label="Save ${escapeHtml(player.sheet.name)} HP">SAVE</button>
          </form>
          <div class="dashboard-conditions">
            <div class="dashboard-condition-list">${player.conditions.length
              ? player.conditions.map((condition) => `<span class="dashboard-condition">${escapeHtml(condition.name)}${condition.duration ? ` · ${escapeHtml(condition.duration)}` : ""}<button type="button" data-remove-condition="${escapeHtml(condition.id)}" data-character-id="${escapeHtml(player.characterId)}" data-campaign-id="${escapeHtml(campaignId)}" aria-label="Remove ${escapeHtml(condition.name)}">×</button>${condition.note ? `<small>${escapeHtml(condition.note)}</small>` : ""}</span>`).join("")
              : `<span class="dashboard-no-conditions">No active conditions</span>`}</div>
            <form class="dashboard-condition-form" data-character-id="${escapeHtml(player.characterId)}" data-campaign-id="${escapeHtml(campaignId)}">
              <select name="name" aria-label="Condition for ${escapeHtml(player.sheet.name)}" required>
                <option value="">＋ CONDITION</option>${standardConditions.map((condition) => `<option value="${condition}">${condition}</option>`).join("")}
              </select>
              <input name="duration" type="text" maxlength="60" placeholder="Duration (optional)" aria-label="Condition duration" />
              <input name="note" type="text" maxlength="160" placeholder="Note (optional)" aria-label="Condition note" />
              <button type="submit">ADD</button>
            </form>
          </div>
        </article>
      `).join("")
    : `<div class="dashboard-empty"><p>No character sheets imported yet.</p><p>Import a Party Vault character export to add a player to your roster.</p></div>`;

  const currentParticipants = encounter
    ? [
        ...encounter.playerIds.map((id) => {
          const player = roster.find((item) => item.characterId === id);
          return player ? {
            id: player.characterId,
            name: player.sheet.name,
              initiative: player.initiative ?? null,
            modifier: player.sheet.initiativeModifier,
            player,
          } : null;
        }).filter(Boolean),
        ...encounter.combatants.map((combatant) => ({ ...combatant, modifier: 0, player: null })),
        ].sort((a, b) => (b.initiative ?? 0) - (a.initiative ?? 0))
    : [];
  const initiativeRows = currentParticipants.map((participant, index) => `
    <li class="initiative-row${encounter.turnIndex === index ? " is-current-turn" : ""}">
      <span class="initiative-score">${Number.isInteger(participant.initiative) ? participant.initiative : "—"}</span>
      <span class="initiative-name">${escapeHtml(participant.name)}${participant.player ? `<small>Player · HP ${participant.player.currentHp}/${participant.player.sheet.maxHp}</small>` : "<small>Encounter combatant</small>"}</span>
      ${participant.player
        ? `<button type="button" data-roll-initiative="${escapeHtml(participant.id)}" data-campaign-id="${escapeHtml(campaignId)}" aria-label="Roll initiative for ${escapeHtml(participant.name)}">ROLL d20${participant.modifier >= 0 ? "+" : ""}${participant.modifier}</button>`
        : `<span class="initiative-npc-label">NPC</span>`}
    </li>`).join("");

  return renderCampaignShell("dm", campaign, campaignId, "session", `
      <header class="feature-head">
        <h2>Session dashboard</h2>
        <p>The party at a glance, ready for the next turn.</p>
      </header>
      <div class="dashboard-import-bar">
        <span>PLAYER ROSTER <strong>${roster.length}</strong></span>
        <form class="character-import-form" data-campaign-id="${escapeHtml(campaignId)}">
          <label class="dashboard-import-button">＋ IMPORT CHARACTER<input type="file" name="characterFile" accept=".json,.pvcharacter,application/json" /></label>
          <button class="dashboard-sample-party" type="button" data-add-test-party data-campaign-id="${escapeHtml(campaignId)}">＋ ADD TEST PARTY</button>
          <p class="dashboard-import-feedback" role="status" aria-live="polite"></p>
        </form>
      </div>
      <div class="session-dashboard-grid">
        <section class="dashboard-roster" aria-labelledby="roster-heading">
          <header class="dashboard-section-heading"><div><h2 id="roster-heading">Players</h2><p>Imported character sheets and live trackers</p></div></header>
          <div class="dashboard-player-list">${rosterRows}</div>
        </section>
        <section class="dashboard-initiative" aria-labelledby="initiative-heading">
          <header class="dashboard-section-heading"><div><h2 id="initiative-heading">Initiative</h2><p>${encounter ? "Current encounter order" : "Choose who is in this encounter"}</p></div></header>
          ${encounter ? `
            ${initiativeRows ? `<ol class="initiative-list">${initiativeRows}</ol>` : `<p class="dashboard-empty">No participants in this encounter yet.</p>`}
            <form class="dashboard-combatant-form" data-campaign-id="${escapeHtml(campaignId)}">
              <h3>Add encounter combatant</h3>
              <div><input name="name" type="text" maxlength="80" placeholder="Enemy or NPC name" required />
              <input name="initiative" type="number" placeholder="Initiative" aria-label="Initiative" required />
              <button type="submit">ADD</button></div>
            </form>
            <div class="dashboard-encounter-actions">
              <button type="button" data-next-turn data-campaign-id="${escapeHtml(campaignId)}" ${currentParticipants.length < 2 ? "disabled" : ""}>NEXT TURN ⟶</button>
              <button type="button" data-end-encounter data-campaign-id="${escapeHtml(campaignId)}">END ENCOUNTER</button>
            </div>
          ` : `
            <form class="dashboard-start-encounter-form" data-campaign-id="${escapeHtml(campaignId)}">
              ${roster.length ? `
                <fieldset><legend>Choose players for this encounter</legend>
                  ${roster.map((player) => `<label><input type="checkbox" name="players" value="${escapeHtml(player.characterId)}" checked />${escapeHtml(player.sheet.name)} <small>HP ${player.currentHp}/${player.sheet.maxHp}</small></label>`).join("")}
                </fieldset>
                <button class="campaign-submit" type="submit">START ENCOUNTER <span aria-hidden="true">⟶</span></button>
              ` : `<p class="dashboard-empty">Import character sheets to prepare an encounter.</p>`}
              <p class="dashboard-feedback" role="status" aria-live="polite"></p>
            </form>
          `}
        </section>
      </div>
  `);
}

function renderDMTool(campaign, campaignId, toolId, featureId = "", featureMode = "", featureAction = "") {
  if (toolId === "almanac") {
    return renderAlmanac(campaign, "dm", campaignId, featureId, featureMode, featureAction);
  }
  if (toolId === "session") {
    return renderSessionDashboard(campaign, campaignId);
  }
  const tool = dmTools.find((item) => item.id === toolId);
  if (!tool) {
    return renderSessionDashboard(campaign, campaignId);
  }

  const details = tool.details.map((detail) => `<li>${detail}</li>`).join("");
  return renderCampaignShell("dm", campaign, campaignId, tool.id, `
      <header class="feature-head">
        <h2>${tool.title} <span class="feature-badge">SOON</span></h2>
        <p>${tool.description}</p>
      </header>
      <div class="dm-tool-panel">
        <span class="dm-feature-icon" aria-hidden="true">${tool.icon}</span>
        <p class="player-feature-eyebrow">${tool.eyebrow}</p>
        <h2>This tool is being prepared</h2>
        <p>This space is reserved for a campaign-specific ${tool.title.toLowerCase()}.</p>
        <ul>${details}</ul>
      </div>
  `);
}

function renderCampaignWorkspace(role, campaignId, feature = "", featureId = "", featureMode = "", featureAction = "") {
  const campaign = getCampaigns(role).find((item) => item.id === campaignId);
  if (!campaign) {
    return renderCampaignList(role);
  }

  if (role === "player") {
    if (feature === "almanac") {
      return renderAlmanac(campaign, role, campaignId, featureId, featureMode, featureAction);
    }
    if (feature === "notes") {
      return renderSessionNotes(campaign, campaignId, featureId, featureMode);
    }
    return renderCharacterSheet(campaign, campaignId);
  }

  return feature ? renderDMTool(campaign, campaignId, feature, featureId, featureMode, featureAction) : renderSessionDashboard(campaign, campaignId);
}

function renderZone(role, campaignId, feature = "", featureId = "", featureMode = "", featureAction = "") {
  const isDungeonMaster = role === "dm";
  const heading = isDungeonMaster ? "Game Master" : "Adventurer";
  const icon = isDungeonMaster ? dmIcon : playerIcon;
  return campaignId
    ? renderCampaignWorkspace(role, campaignId, feature, featureId, featureMode, featureAction)
    : renderCampaignList(role, heading, icon);
}

let lastRoute = null;

function render() {
  if (!app) {
    throw new Error("The app root element was not found.");
  }

  const hash = window.location.hash;
  const routeChanged = hash !== lastRoute;
  lastRoute = hash;
  const route = hash.slice(1);
  const [role, campaignId, feature, featureId, featureMode, featureAction] = route.split("/");
  if (role !== "player" && role !== "dm") {
    app.innerHTML = homeView;
    if (routeChanged) {
      window.scrollTo(0, 0);
    }
    return;
  }

  try {
    app.innerHTML = renderZone(
      role,
      campaignId ? decodeURIComponent(campaignId) : "",
      feature ? decodeURIComponent(feature) : "",
      featureId ? decodeURIComponent(featureId) : "",
      featureMode ? decodeURIComponent(featureMode) : "",
      featureAction ? decodeURIComponent(featureAction) : "",
    );
    if (routeChanged) {
      window.scrollTo(0, 0);
    }
    const almanacDialog = app.querySelector(".almanac-dialog");
    if (almanacDialog instanceof HTMLDialogElement) {
      almanacDialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        const [dialogRole, dialogCampaignId, , dialogSection] = window.location.hash.slice(1).split("/");
        if (dialogCampaignId && (dialogRole === "player" || dialogRole === "dm")) {
          window.location.hash = almanacHref(
            dialogRole,
            decodeURIComponent(dialogCampaignId),
            dialogSection ? decodeURIComponent(dialogSection) : "npcs",
          ).slice(1);
        }
      });
      almanacDialog.showModal();
      almanacDialog.querySelector("#almanac-title, #npc-field-name")?.focus();
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Campaigns could not be loaded.";
    app.innerHTML = `
      <section class="zone-view campaign-view" aria-labelledby="campaign-error-heading">
        <p class="eyebrow">✧ &nbsp; THE GUILD ARCHIVES &nbsp; ✧</p>
        <h1 id="campaign-error-heading">Campaigns could not be loaded.</h1>
        <p class="zone-copy">${escapeHtml(message)}</p>
        <a class="back-link" href="#home"><span aria-hidden="true">⟵</span> RETURN TO THE GREAT HALL</a>
      </section>
    `;
  }
}

window.addEventListener("hashchange", render);
render();

app.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  if (form.matches(".session-note-form")) {
    event.preventDefault();
    const titleField = form.elements.namedItem("title");
    const dateField = form.elements.namedItem("date");
    const notesField = form.elements.namedItem("notes");
    const feedback = form.querySelector(".session-note-feedback");
    const campaignId = form.dataset.campaignId;
    if (
      !(titleField instanceof HTMLInputElement) ||
      !(dateField instanceof HTMLInputElement) ||
      !(notesField instanceof HTMLTextAreaElement) ||
      !(feedback instanceof HTMLParagraphElement) ||
      !campaignId
    ) {
      throw new Error("The session note form is missing required fields.");
    }

    const title = titleField.value.trim();
    const date = dateField.value;
    const notes = notesField.value.trim();
    if (!title || !date || !notes) {
      feedback.textContent = "Add a title, date, and notes before saving.";
      return;
    }

    try {
      const campaigns = getCampaigns("player");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const sessions = playerSessions(campaign);
      const sessionId = form.dataset.sessionId;
      const existingSession = sessionId ? sessions.find((session) => session.id === sessionId) : null;
      const session = {
        id: existingSession?.id ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
        title,
        date,
        notes,
        updatedAt: new Date().toISOString(),
      };
      if (existingSession) {
        Object.assign(existingSession, session);
      } else {
        sessions.push(session);
      }
      campaign.data.sessions = sessions;
      window.localStorage.setItem(campaignStorageKey("player"), JSON.stringify(campaigns));
      window.location.hash = `player/${encodeURIComponent(campaignId)}/notes/${encodeURIComponent(session.id)}`;
      if (window.location.hash === `#player/${encodeURIComponent(campaignId)}/notes/${encodeURIComponent(session.id)}`) {
        render();
      }
    } catch (error) {
      feedback.textContent =
        error instanceof Error ? `Could not save session notes: ${error.message}` : "Could not save session notes.";
    }
    return;
  }

  if (form.matches(".character-sheet-form")) {
    event.preventDefault();
    const campaignId = form.dataset.campaignId;
    const feedback = form.querySelector(".character-sheet-feedback");
    if (!campaignId || !(feedback instanceof HTMLParagraphElement)) {
      throw new Error("The character sheet form is missing required fields.");
    }
    const value = (name) => form.elements.namedItem(name);
    const text = (name, max = 200) => {
      const field = value(name);
      const raw = field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement
        ? field.value.trim()
        : "";
      return raw.slice(0, max);
    };
    const number = (name) => {
      const field = value(name);
      return field instanceof HTMLInputElement && field.value !== "" ? Number(field.value) : NaN;
    };
    const checkbox = (name) => {
      const field = value(name);
      return field instanceof HTMLInputElement ? field.checked : false;
    };
    const name = text("name", 80);
    const characterClass = text("characterClass", 60);
    const species = text("species", 60);
    const level = number("level");
    const armorClass = number("armorClass");
    const maxHp = number("maxHp");
    const currentHp = number("currentHp");
    const initiativeModifier = number("initiativeModifier");
    const abilities = Object.fromEntries(
      abilityKeys.map((ability) => [ability, number(`ability-${ability}`)]),
    );
    const experience = number("experience");
    const speed = number("speed");
    const tempHp = number("tempHp");
    const hitDiceUsed = number("hitDiceUsed");
    const deathSuccesses = number("deathSuccesses");
    const deathFailures = number("deathFailures");
    const saveProficiencies = Object.fromEntries(
      abilityKeys.map((ability) => [ability, checkbox(`save-${ability}`)]),
    );
    const skillProficiencies = Object.fromEntries(
      skillList.map((skill) => {
        const field = value(`skill-${skill.key}`);
        const raw = field instanceof HTMLSelectElement ? field.value : "";
        return [skill.key, raw === "proficient" || raw === "expertise" ? raw : ""];
      }),
    );
    const attacks = [...form.querySelectorAll("[data-attack-row]")].slice(0, 12).map((row) => ({
      id: row instanceof HTMLElement && row.dataset.rowId ? row.dataset.rowId : newRecordId(),
      name: row.querySelector(".attack-name") instanceof HTMLInputElement ? row.querySelector(".attack-name").value.trim().slice(0, 60) : "",
      bonus: row.querySelector(".attack-bonus") instanceof HTMLInputElement ? row.querySelector(".attack-bonus").value.trim().slice(0, 12) : "",
      damage: row.querySelector(".attack-damage") instanceof HTMLInputElement ? row.querySelector(".attack-damage").value.trim().slice(0, 40) : "",
    })).filter((attack) => attack.name || attack.bonus || attack.damage);
    const currency = Object.fromEntries(
      ["cp", "sp", "ep", "gp", "pp"].map((coin) => [coin, number(`coin-${coin}`)]),
    );
    const castingAbility = text("castingAbility", 20);
    const slots = {};
    for (let slotLevel = 1; slotLevel <= 9; slotLevel += 1) {
      slots[slotLevel] = { total: number(`slot-${slotLevel}-total`), used: number(`slot-${slotLevel}-used`) };
    }
    const spells = [...form.querySelectorAll("[data-spell-row]")].slice(0, 60).map((row) => {
      const levelField = row.querySelector(".spell-level");
      const levelValue = levelField instanceof HTMLSelectElement ? Number(levelField.value) : 0;
      const preparedField = row.querySelector(".spell-prepared-box");
      return {
        id: row instanceof HTMLElement && row.dataset.rowId ? row.dataset.rowId : newRecordId(),
        name: row.querySelector(".spell-name") instanceof HTMLInputElement ? row.querySelector(".spell-name").value.trim().slice(0, 80) : "",
        level: Number.isInteger(levelValue) && levelValue >= 0 && levelValue <= 9 ? levelValue : 0,
        prepared: preparedField instanceof HTMLInputElement ? preparedField.checked : false,
      };
    }).filter((spell) => spell.name);
    if (
      !name ||
      !characterClass ||
      !species ||
      !Number.isInteger(level) || level < 1 || level > 20 ||
      !Number.isInteger(armorClass) || armorClass < 0 || armorClass > 99 ||
      !Number.isInteger(maxHp) || maxHp < 1 || maxHp > 999 ||
      !Number.isInteger(currentHp) || currentHp < 0 || currentHp > maxHp ||
      !Number.isInteger(initiativeModifier) || initiativeModifier < -20 || initiativeModifier > 20 ||
      Object.values(abilities).some((score) => !Number.isInteger(score) || score < 1 || score > 30) ||
      (form.querySelector('[name="experience"]')?.value !== "" && (!Number.isInteger(experience) || experience < 0)) ||
      (form.querySelector('[name="speed"]')?.value !== "" && (!Number.isInteger(speed) || speed < 0 || speed > 999)) ||
      (form.querySelector('[name="tempHp"]')?.value !== "" && (!Number.isInteger(tempHp) || tempHp < 0 || tempHp > 999)) ||
      (form.querySelector('[name="hitDiceUsed"]')?.value !== "" && (!Number.isInteger(hitDiceUsed) || hitDiceUsed < 0 || hitDiceUsed > 99)) ||
      (form.querySelector('[name="deathSuccesses"]')?.value !== "" && (!Number.isInteger(deathSuccesses) || deathSuccesses < 0 || deathSuccesses > 3)) ||
      (form.querySelector('[name="deathFailures"]')?.value !== "" && (!Number.isInteger(deathFailures) || deathFailures < 0 || deathFailures > 3)) ||
      Object.values(currency).some((coins, index) => form.querySelector(`[name="coin-${["cp", "sp", "ep", "gp", "pp"][index]}"]`)?.value !== "" && (!Number.isInteger(coins) || coins < 0)) ||
      !spellAbilityKeys.includes(castingAbility) ||
      Object.values(slots).some((slot, index) =>
        (form.querySelector(`[name="slot-${index + 1}-total"]`)?.value !== "" && (!Number.isInteger(slot.total) || slot.total < 0 || slot.total > 30)) ||
        (form.querySelector(`[name="slot-${index + 1}-used"]`)?.value !== "" && (!Number.isInteger(slot.used) || slot.used < 0 || slot.used > slot.total))) ||
      attacks.length > 12 ||
      spells.length > 60
    ) {
      feedback.textContent = "Check the highlighted numbers: level, HP, AC, abilities, currency, spell slots, and death saves.";
      return;
    }
    try {
      const campaigns = getCampaigns("player");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const existing = getCharacterSheet(campaign);
      campaign.data.characterSheet = normalizeCharacterSheet({
        id: existing?.id ?? newRecordId(),
        name,
        playerName: text("playerName", 80),
        characterClass,
        species,
        background: text("background", 60),
        alignment: text("alignment", 60),
        experience: Number.isInteger(experience) ? experience : 0,
        level,
        armorClass,
        maxHp,
        currentHp,
        tempHp: Number.isInteger(tempHp) ? tempHp : 0,
        initiativeModifier,
        speed: Number.isInteger(speed) ? speed : 30,
        inspiration: checkbox("inspiration"),
        abilities,
        saveProficiencies,
        skillProficiencies,
        hitDiceTotal: text("hitDiceTotal", 12),
        hitDiceUsed: Number.isInteger(hitDiceUsed) ? hitDiceUsed : 0,
        deathSaves: {
          successes: Number.isInteger(deathSuccesses) ? deathSuccesses : 0,
          failures: Number.isInteger(deathFailures) ? deathFailures : 0,
        },
        attacks,
        features: text("features", 6000),
        proficiencies: text("proficiencies", 3000),
        equipment: text("equipment", 6000),
        currency: Object.fromEntries(Object.entries(currency).map(([coin, coins]) => [coin, Number.isInteger(coins) ? coins : 0])),
        spellcasting: {
          class: text("castingClass", 60),
          ability: castingAbility,
          slots: Object.fromEntries(Object.entries(slots).map(([slotLevel, slot]) => [slotLevel, {
            total: Number.isInteger(slot.total) ? slot.total : 0,
            used: Number.isInteger(slot.used) ? slot.used : 0,
          }])),
        },
        spells,
        notes: text("notes", 6000),
        roleplay: {
          traits: text("rp-traits", 2000),
          ideals: text("rp-ideals", 2000),
          bonds: text("rp-bonds", 2000),
          flaws: text("rp-flaws", 2000),
          backstory: text("rp-backstory", 12000),
          allies: text("rp-allies", 6000),
          age: text("rp-age", 40),
          height: text("rp-height", 40),
          weight: text("rp-weight", 40),
          eyes: text("rp-eyes", 40),
          skin: text("rp-skin", 40),
          hair: text("rp-hair", 40),
        },
        updatedAt: new Date().toISOString(),
      });
      window.localStorage.setItem(campaignStorageKey("player"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      feedback.textContent = error instanceof Error ? `Could not save character sheet: ${error.message}` : "Could not save character sheet.";
    }
    return;
  }

  if (form.matches(".dashboard-hp-form")) {
    event.preventDefault();
    const role = "dm";
    const campaignId = form.dataset.campaignId;
    const characterId = form.dataset.characterId;
    const hpField = form.elements.namedItem("currentHp");
    if (!campaignId || !characterId || !(hpField instanceof HTMLInputElement)) {
      throw new Error("The HP tracker form is missing required fields.");
    }
    try {
      const campaigns = getCampaigns(role);
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      const player = dashboard.roster.find((item) => item.characterId === characterId);
      const currentHp = Number(hpField.value);
      if (!player || !Number.isInteger(currentHp) || currentHp < 0 || currentHp > player.sheet.maxHp) {
        throw new Error("Enter current HP between 0 and the character’s maximum HP.");
      }
      player.currentHp = currentHp;
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey(role), JSON.stringify(campaigns));
      render();
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not update HP: ${error.message}` : "Could not update HP.";
      }
    }
    return;
  }

  if (form.matches(".dashboard-condition-form")) {
    event.preventDefault();
    const campaignId = form.dataset.campaignId;
    const characterId = form.dataset.characterId;
    const nameField = form.elements.namedItem("name");
    const durationField = form.elements.namedItem("duration");
    const noteField = form.elements.namedItem("note");
    if (
      !campaignId ||
      !characterId ||
      !(nameField instanceof HTMLSelectElement) ||
      !(durationField instanceof HTMLInputElement) ||
      !(noteField instanceof HTMLInputElement) ||
      !standardConditions.includes(nameField.value)
    ) {
      throw new Error("The condition form is missing valid fields.");
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      const player = dashboard.roster.find((item) => item.characterId === characterId);
      if (!player) {
        throw new Error("The player could not be found.");
      }
      player.conditions.push({
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
        name: nameField.value,
        duration: durationField.value.trim(),
        note: noteField.value.trim(),
      });
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not add condition: ${error.message}` : "Could not add condition.";
      }
    }
    return;
  }

  if (form.matches(".dashboard-start-encounter-form")) {
    event.preventDefault();
    const campaignId = form.dataset.campaignId;
    const feedback = form.querySelector(".dashboard-feedback");
    if (!campaignId || !(feedback instanceof HTMLParagraphElement)) {
      throw new Error("The encounter form is missing required fields.");
    }
    const playerIds = [...form.querySelectorAll('input[name="players"]:checked')]
      .filter((input) => input instanceof HTMLInputElement)
      .map((input) => input.value);
    if (!playerIds.length) {
      feedback.textContent = "Choose at least one player for the encounter.";
      return;
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      if (playerIds.some((id) => !dashboard.roster.some((player) => player.characterId === id))) {
        throw new Error("A selected player is no longer in the roster.");
      }
      dashboard.encounter = {
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
        playerIds,
        combatants: [],
        turnIndex: 0,
      };
      for (const id of playerIds) {
        const player = dashboard.roster.find((item) => item.characterId === id);
        player.initiative = null;
      }
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      feedback.textContent = error instanceof Error ? `Could not start encounter: ${error.message}` : "Could not start encounter.";
    }
    return;
  }

  if (form.matches(".dashboard-combatant-form")) {
    event.preventDefault();
    const campaignId = form.dataset.campaignId;
    const nameField = form.elements.namedItem("name");
    const initiativeField = form.elements.namedItem("initiative");
    if (!campaignId || !(nameField instanceof HTMLInputElement) || !(initiativeField instanceof HTMLInputElement)) {
      throw new Error("The encounter combatant form is missing required fields.");
    }
    const name = nameField.value.trim();
    const initiative = Number(initiativeField.value);
    if (!name || !Number.isInteger(initiative)) {
      return;
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      if (!dashboard.encounter) {
        throw new Error("There is no active encounter.");
      }
      dashboard.encounter.combatants.push({
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
        name,
        initiative,
      });
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not add combatant: ${error.message}` : "Could not add combatant.";
      }
    }
    return;
  }

  if (form.matches(".npc-field-form")) {
    event.preventDefault();
    const role = form.dataset.role;
    const campaignId = form.dataset.campaignId;
    const nameField = form.elements.namedItem("name");
    const typeField = form.elements.namedItem("type");
    const optionsField = form.elements.namedItem("options");
    const feedback = form.querySelector(".almanac-feedback");
    if (
      (role !== "player" && role !== "dm") ||
      !campaignId ||
      !(nameField instanceof HTMLInputElement) ||
      !(typeField instanceof HTMLSelectElement) ||
      !(optionsField instanceof HTMLInputElement) ||
      !(feedback instanceof HTMLParagraphElement)
    ) {
      throw new Error("The NPC field form is missing required fields.");
    }
    const name = nameField.value.trim();
    const type = typeField.value;
    const options = type === "select"
      ? [...new Set(optionsField.value.split(",").map((option) => option.trim()).filter(Boolean))]
      : [];
    if (!name) {
      feedback.textContent = "Enter a name for this NPC field.";
      nameField.focus();
      return;
    }
    if (!["text", "number", "select", "checkbox"].includes(type) || (type === "select" && !options.length)) {
      feedback.textContent = "Add at least one comma-separated option for a dropdown field.";
      optionsField.focus();
      return;
    }
    try {
      const campaigns = getCampaigns(role);
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const almanac = getAlmanac(campaign);
      if (almanac.npcFields.some((field) => field.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
        feedback.textContent = "An NPC field with that name already exists.";
        nameField.focus();
        return;
      }
      almanac.npcFields.push({
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
        name,
        type,
        options,
      });
      campaign.data.almanac = almanac;
      window.localStorage.setItem(campaignStorageKey(role), JSON.stringify(campaigns));
      render();
    } catch (error) {
      feedback.textContent = error instanceof Error ? `Could not add NPC field: ${error.message}` : "Could not add NPC field.";
    }
    return;
  }

  if (form.matches(".almanac-entry-form")) {
    event.preventDefault();
    const role = form.dataset.role;
    const campaignId = form.dataset.campaignId;
    const type = form.dataset.type;
    const entryId = form.dataset.entryId;
    const titleField = form.elements.namedItem("title");
    const feedback = form.querySelector(".almanac-feedback");
    if (
      (role !== "player" && role !== "dm") ||
      !campaignId ||
      !Object.hasOwn(almanacTypes, type) ||
      !(titleField instanceof HTMLInputElement) ||
      !(feedback instanceof HTMLParagraphElement)
    ) {
      throw new Error("The Almanac entry form is missing required fields.");
    }
    const title = titleField.value.trim();
    if (!title) {
      feedback.textContent = type === "npcs" ? "Enter an NPC name." : "Enter a title.";
      titleField.focus();
      return;
    }
    try {
      const campaigns = getCampaigns(role);
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const almanac = getAlmanac(campaign);
      const existingEntry = entryId ? almanac.entries.find((entry) => entry.id === entryId && entry.type === type) : null;
      if (entryId && !existingEntry) {
        throw new Error("The Almanac entry could not be found.");
      }
      const bodyField = form.elements.namedItem("body");
      const categoryField = form.elements.namedItem("category");
      const tagsField = form.elements.namedItem("tags");
      const fieldValues = {};
      if (type === "npcs") {
        for (const field of almanac.npcFields) {
          const control = form.elements.namedItem(`field-${field.id}`);
          if (field.type === "checkbox") {
            if (!(control instanceof HTMLInputElement)) {
              throw new Error(`The ${field.name} NPC field is missing.`);
            }
            fieldValues[field.id] = control.checked;
          } else {
            if (!(control instanceof HTMLInputElement || control instanceof HTMLSelectElement)) {
              throw new Error(`The ${field.name} NPC field is missing.`);
            }
            if (field.type === "number" && control.value && !Number.isFinite(Number(control.value))) {
              throw new Error(`${field.name} must be a valid number.`);
            }
            fieldValues[field.id] = field.type === "number" && control.value ? Number(control.value) : control.value.trim();
          }
        }
      }
      const relatedIds = type === "lore"
        ? [...form.querySelectorAll('input[name="relatedIds"]:checked')]
            .filter((input) => input instanceof HTMLInputElement)
            .map((input) => input.value)
        : [];
      const entry = {
        id: existingEntry?.id ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
        type,
        title,
        body: bodyField instanceof HTMLTextAreaElement ? bodyField.value.trim() : "",
        category: type === "lore" && categoryField instanceof HTMLInputElement ? categoryField.value.trim() : "",
        tags: type === "lore" && tagsField instanceof HTMLInputElement
          ? [...new Set(tagsField.value.split(",").map((tag) => tag.trim()).filter(Boolean))]
          : [],
        relatedIds,
        fieldValues,
        createdAt: existingEntry?.createdAt ?? new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (existingEntry) {
        Object.assign(existingEntry, entry);
      } else {
        almanac.entries.push(entry);
      }
      campaign.data.almanac = almanac;
      window.localStorage.setItem(campaignStorageKey(role), JSON.stringify(campaigns));
      window.location.hash = almanacHref(role, campaignId, type, entry.id).slice(1);
      if (window.location.hash === almanacHref(role, campaignId, type, entry.id)) {
        render();
      }
    } catch (error) {
      feedback.textContent = error instanceof Error ? `Could not save entry: ${error.message}` : "Could not save entry.";
    }
    return;
  }

  if (!form.matches(".campaign-form")) {
    return;
  }

  event.preventDefault();
  const role = form.dataset.role;
  const nameField = form.elements.namedItem("name");
  const feedback = form.querySelector(".campaign-feedback");
  if (
    (role !== "player" && role !== "dm") ||
    !(nameField instanceof HTMLInputElement) ||
    !(feedback instanceof HTMLParagraphElement)
  ) {
    throw new Error("The campaign form is missing required fields.");
  }

  const name = nameField.value.trim();
  if (!name) {
    feedback.textContent = "Enter a campaign name to continue.";
    nameField.focus();
    return;
  }

  try {
    const campaigns = getCampaigns(role);
    const campaign = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
      name,
      createdAt: new Date().toISOString(),
      data: {},
    };
    campaigns.push(campaign);
    window.localStorage.setItem(campaignStorageKey(role), JSON.stringify(campaigns));
    render();
  } catch (error) {
    feedback.textContent =
      error instanceof Error ? `Could not save campaign: ${error.message}` : "Could not save campaign.";
  }
});

app.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement) || target.id !== "npc-field-type") {
    return;
  }
  const options = app.querySelector(".almanac-options-field");
  if (!(options instanceof HTMLElement)) {
    throw new Error("The NPC dropdown options control is missing.");
  }
  options.hidden = target.value !== "select";
});

app.addEventListener("change", async (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.matches('input[name="characterFile"]')) {
    return;
  }
  const form = input.closest(".character-import-form");
  const campaignId = form?.dataset.campaignId;
  const feedback = form?.querySelector(".dashboard-import-feedback");
  const file = input.files?.[0];
  if (!campaignId || !(feedback instanceof HTMLParagraphElement) || !file) {
    return;
  }
  if (file.size > 2_000_000) {
    feedback.textContent = "Character exports must be smaller than 2 MB.";
    input.value = "";
    return;
  }
  try {
    const payload = JSON.parse(await file.text());
    if (
      !payload ||
      payload.format !== "party-vault-character" ||
      (payload.version !== 1 && payload.version !== 2) ||
      !payload.character
    ) {
      throw new Error("This file is not a supported Party Vault character export.");
    }
    const importedSheet = getCharacterSheet({ data: { characterSheet: payload.character } });
    const campaigns = getCampaigns("dm");
    const campaign = campaigns.find((item) => item.id === campaignId);
    if (!campaign) {
      throw new Error("The campaign could not be found.");
    }
    const dashboard = getSessionDashboard(campaign);
    const existing = dashboard.roster.find((player) => player.characterId === importedSheet.id);
    if (existing) {
      const currentHp = Math.min(existing.currentHp, importedSheet.maxHp);
      existing.sheet = importedSheet;
      existing.currentHp = currentHp;
    } else {
      dashboard.roster.push({
        characterId: importedSheet.id,
        sheet: importedSheet,
        currentHp: importedSheet.currentHp,
        conditions: [],
        initiative: null,
      });
    }
    campaign.data.sessionDashboard = dashboard;
    window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
    render();
  } catch (error) {
    feedback.textContent = error instanceof Error ? `Could not import character: ${error.message}` : "Could not import character.";
    input.value = "";
  }
});

app.addEventListener("cancel", (event) => {
  const dialog = event.target;
  if (!(dialog instanceof HTMLDialogElement) || !dialog.matches(".almanac-dialog")) {
    return;
  }
  event.preventDefault();
  const route = window.location.hash.slice(1).split("/");
  const role = route[0];
  const campaignId = route[1] ? decodeURIComponent(route[1]) : "";
  const section = route[3] ? decodeURIComponent(route[3]) : "npcs";
  if (campaignId && (role === "player" || role === "dm")) {
    window.location.hash = almanacHref(role, campaignId, section).slice(1);
  }
}, true);

app.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  const sheetTab = target.closest("[data-sheet-tab]");
  if (sheetTab instanceof HTMLButtonElement) {
    const form = sheetTab.closest(".character-sheet-form");
    if (form) {
      const selected = sheetTab.dataset.sheetTab;
      form.querySelectorAll("[data-sheet-tab]").forEach((tab) => {
        if (tab instanceof HTMLButtonElement) {
          tab.setAttribute("aria-selected", tab.dataset.sheetTab === selected ? "true" : "false");
        }
      });
      form.querySelectorAll("[data-sheet-section]").forEach((section) => {
        if (section instanceof HTMLElement) {
          section.hidden = section.dataset.sheetSection !== selected;
        }
      });
    }
    return;
  }

  const addAttackButton = target.closest("[data-add-attack]");
  if (addAttackButton instanceof HTMLButtonElement) {
    const form = addAttackButton.closest(".character-sheet-form");
    const list = form?.querySelector("[data-attack-list]");
    if (list && list.querySelectorAll("[data-attack-row]").length < 12) {
      list.insertAdjacentHTML("beforeend", `
        <div class="attack-row" data-attack-row data-row-id="new-${newRecordId()}">
          <input class="attack-name" type="text" maxlength="60" placeholder="Weapon or attack" aria-label="Attack name" />
          <input class="attack-bonus" type="text" maxlength="12" placeholder="+5" aria-label="Attack bonus" />
          <input class="attack-damage" type="text" maxlength="40" placeholder="1d8+3 slashing" aria-label="Damage and type" />
          <button type="button" data-remove-row aria-label="Remove attack">×</button>
        </div>`);
      list.querySelector("[data-attack-row]:last-child .attack-name")?.focus();
    }
    return;
  }

  const addSpellButton = target.closest("[data-add-spell]");
  if (addSpellButton instanceof HTMLButtonElement) {
    const form = addSpellButton.closest(".character-sheet-form");
    const list = form?.querySelector("[data-spell-list]");
    if (list && list.querySelectorAll("[data-spell-row]").length < 60) {
      list.insertAdjacentHTML("beforeend", `
        <div class="spell-row" data-spell-row data-row-id="new-${newRecordId()}">
          <input class="spell-name" type="text" maxlength="80" placeholder="Spell name" aria-label="Spell name" />
          <select class="spell-level" aria-label="Spell level">
            <option value="0">Cantrip</option><option value="1">Level 1</option><option value="2">Level 2</option>
            <option value="3">Level 3</option><option value="4">Level 4</option><option value="5">Level 5</option>
            <option value="6">Level 6</option><option value="7">Level 7</option><option value="8">Level 8</option>
            <option value="9">Level 9</option>
          </select>
          <label class="spell-prepared"><input class="spell-prepared-box" type="checkbox" /> PREP</label>
          <button type="button" data-remove-row aria-label="Remove spell">×</button>
        </div>`);
      list.querySelector("[data-spell-row]:last-child .spell-name")?.focus();
    }
    return;
  }

  const removeRowButton = target.closest("[data-remove-row]");
  if (removeRowButton instanceof HTMLButtonElement) {
    removeRowButton.closest("[data-attack-row], [data-spell-row]")?.remove();
    return;
  }

  const exportCharacterButton = target.closest("[data-export-character]");
  if (exportCharacterButton instanceof HTMLButtonElement) {
    const route = window.location.hash.slice(1).split("/");
    const campaignId = route[1] ? decodeURIComponent(route[1]) : "";
    if (!campaignId || route[0] !== "player") {
      throw new Error("The character sheet could not be identified for export.");
    }
    try {
      const campaign = getCampaigns("player").find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const character = getCharacterSheet(campaign);
      if (!character) {
        throw new Error("Create a character sheet before exporting it.");
      }
      const file = new Blob(
        [JSON.stringify({ format: "party-vault-character", version: 2, character }, null, 2)],
        { type: "application/json" },
      );
      const objectUrl = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${character.name.replace(/[^a-z0-9-_]+/gi, "-").replace(/^-|-$/g, "") || "character"}.pvcharacter`;
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch (error) {
      const feedback = app.querySelector(".character-sheet-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not export character: ${error.message}` : "Could not export character.";
      }
    }
    return;
  }

  const addTestPartyButton = target.closest("[data-add-test-party]");
  if (addTestPartyButton instanceof HTMLButtonElement) {
    const campaignId = addTestPartyButton.dataset.campaignId;
    if (!campaignId) {
      throw new Error("The campaign could not be identified for the test party.");
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      const existingIds = new Set(dashboard.roster.map((player) => player.characterId));
      let addedCount = 0;
      for (const sheet of testPartySheets) {
        if (existingIds.has(sheet.id)) {
          continue;
        }
        dashboard.roster.push({
          characterId: sheet.id,
          sheet: { ...sheet, abilities: { ...sheet.abilities } },
          currentHp: sheet.currentHp,
          conditions: [],
          initiative: null,
        });
        addedCount += 1;
      }
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = addedCount
          ? `Added ${addedCount} test character${addedCount === 1 ? "" : "s"} to the roster.`
          : "The test party is already in the roster.";
        feedback.classList.add("is-success");
      }
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not add test party: ${error.message}` : "Could not add test party.";
      }
    }
    return;
  }

  const rollInitiativeButton = target.closest("[data-roll-initiative]");
  if (rollInitiativeButton instanceof HTMLButtonElement) {
    const characterId = rollInitiativeButton.dataset.rollInitiative;
    const campaignId = rollInitiativeButton.dataset.campaignId;
    if (!characterId || !campaignId) {
      throw new Error("The player could not be identified for initiative.");
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      const player = dashboard.roster.find((item) => item.characterId === characterId);
      if (!player || !dashboard.encounter || !dashboard.encounter.playerIds.includes(characterId)) {
        throw new Error("The player is not part of the active encounter.");
      }
      player.initiative = Math.floor(Math.random() * 20) + 1 + player.sheet.initiativeModifier;
      dashboard.encounter.turnIndex = 0;
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not roll initiative: ${error.message}` : "Could not roll initiative.";
      }
    }
    return;
  }

  const nextTurnButton = target.closest("[data-next-turn]");
  if (nextTurnButton instanceof HTMLButtonElement) {
    const campaignId = nextTurnButton.dataset.campaignId;
    if (!campaignId) {
      throw new Error("The encounter could not be identified.");
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      if (!dashboard.encounter) {
        throw new Error("There is no active encounter.");
      }
      const count = dashboard.encounter.playerIds.length + dashboard.encounter.combatants.length;
      if (count > 0) {
        dashboard.encounter.turnIndex = (dashboard.encounter.turnIndex + 1) % count;
      }
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not advance turn: ${error.message}` : "Could not advance turn.";
      }
    }
    return;
  }

  const endEncounterButton = target.closest("[data-end-encounter]");
  if (endEncounterButton instanceof HTMLButtonElement) {
    const campaignId = endEncounterButton.dataset.campaignId;
    if (!campaignId) {
      throw new Error("The encounter could not be identified.");
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      dashboard.encounter = null;
      for (const player of dashboard.roster) {
        player.initiative = null;
      }
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not end encounter: ${error.message}` : "Could not end encounter.";
      }
    }
    return;
  }

  const removeConditionButton = target.closest("[data-remove-condition]");
  if (removeConditionButton instanceof HTMLButtonElement) {
    const conditionId = removeConditionButton.dataset.removeCondition;
    const characterId = removeConditionButton.dataset.characterId;
    const campaignId = removeConditionButton.dataset.campaignId;
    if (!conditionId || !characterId || !campaignId) {
      throw new Error("The condition could not be identified for removal.");
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      const player = dashboard.roster.find((item) => item.characterId === characterId);
      if (!player) {
        throw new Error("The player could not be found.");
      }
      player.conditions = player.conditions.filter((condition) => condition.id !== conditionId);
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not remove condition: ${error.message}` : "Could not remove condition.";
      }
    }
    return;
  }

  const removeRosterButton = target.closest("[data-remove-roster-player]");
  if (removeRosterButton instanceof HTMLButtonElement) {
    const characterId = removeRosterButton.dataset.removeRosterPlayer;
    const campaignId = removeRosterButton.dataset.campaignId;
    if (!characterId || !campaignId) {
      throw new Error("The player could not be identified for removal.");
    }
    if (!window.confirm("Remove this character from the campaign roster? Their DM-side HP and conditions will be removed.")) {
      return;
    }
    try {
      const campaigns = getCampaigns("dm");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const dashboard = getSessionDashboard(campaign);
      if (!dashboard.roster.some((player) => player.characterId === characterId)) {
        throw new Error("The player could not be found in the roster.");
      }
      dashboard.roster = dashboard.roster.filter((player) => player.characterId !== characterId);
      if (dashboard.encounter) {
        dashboard.encounter.playerIds = dashboard.encounter.playerIds.filter((id) => id !== characterId);
        const participantCount = dashboard.encounter.playerIds.length + dashboard.encounter.combatants.length;
        dashboard.encounter.turnIndex = participantCount
          ? dashboard.encounter.turnIndex % participantCount
          : 0;
      }
      campaign.data.sessionDashboard = dashboard;
      window.localStorage.setItem(campaignStorageKey("dm"), JSON.stringify(campaigns));
      render();
    } catch (error) {
      const feedback = app.querySelector(".dashboard-import-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not remove player: ${error.message}` : "Could not remove player.";
      }
    }
    return;
  }

  if (target.matches(".almanac-dialog")) {
    const rect = target.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      const route = window.location.hash.slice(1).split("/");
      const role = route[0];
      const campaignId = route[1] ? decodeURIComponent(route[1]) : "";
      const section = route[3] ? decodeURIComponent(route[3]) : "npcs";
      if (campaignId && (role === "player" || role === "dm")) {
        window.location.hash = almanacHref(role, campaignId, section).slice(1);
      }
    }
    return;
  }

  const deleteEntryButton = target.closest("[data-delete-almanac-entry]");
  if (deleteEntryButton instanceof HTMLButtonElement) {
    const entryId = deleteEntryButton.dataset.deleteAlmanacEntry;
    const role = deleteEntryButton.dataset.role;
    const campaignId = deleteEntryButton.dataset.campaignId;
    if (!entryId || !campaignId || (role !== "player" && role !== "dm")) {
      throw new Error("The Almanac entry could not be identified for deletion.");
    }
    if (!window.confirm("Delete this Almanac entry? Lore links to it will be removed. This cannot be undone.")) {
      return;
    }
    try {
      const campaigns = getCampaigns(role);
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const almanac = getAlmanac(campaign);
      const index = almanac.entries.findIndex((entry) => entry.id === entryId);
      if (index === -1) {
        throw new Error("The Almanac entry could not be found.");
      }
      almanac.entries.splice(index, 1);
      for (const entry of almanac.entries) {
        entry.relatedIds = entry.relatedIds.filter((id) => id !== entryId);
      }
      campaign.data.almanac = almanac;
      window.localStorage.setItem(campaignStorageKey(role), JSON.stringify(campaigns));
      const route = window.location.hash.slice(1).split("/");
      const section = route[3] ? decodeURIComponent(route[3]) : "";
      window.location.hash = almanacHref(role, campaignId, section).slice(1);
      render();
    } catch (error) {
      const feedback = app.querySelector(".almanac-feedback");
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not delete entry: ${error.message}` : "Could not delete entry.";
      }
    }
    return;
  }

  const removeFieldButton = target.closest("[data-remove-npc-field]");
  if (removeFieldButton instanceof HTMLButtonElement) {
    const fieldId = removeFieldButton.dataset.removeNpcField;
    const route = window.location.hash.slice(1).split("/");
    const role = route[0];
    const campaignId = route[1] ? decodeURIComponent(route[1]) : "";
    const feedback = app.querySelector(".almanac-feedback");
    if (!fieldId || !campaignId || (role !== "player" && role !== "dm")) {
      throw new Error("The NPC field could not be identified for removal.");
    }
    if (!window.confirm("Remove this NPC field and its saved values from every NPC?")) {
      return;
    }
    try {
      const campaigns = getCampaigns(role);
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const almanac = getAlmanac(campaign);
      if (!almanac.npcFields.some((field) => field.id === fieldId)) {
        throw new Error("The NPC field could not be found.");
      }
      almanac.npcFields = almanac.npcFields.filter((field) => field.id !== fieldId);
      for (const entry of almanac.entries) {
        delete entry.fieldValues[fieldId];
      }
      campaign.data.almanac = almanac;
      window.localStorage.setItem(campaignStorageKey(role), JSON.stringify(campaigns));
      render();
    } catch (error) {
      if (feedback instanceof HTMLParagraphElement) {
        feedback.textContent = error instanceof Error ? `Could not remove NPC field: ${error.message}` : "Could not remove NPC field.";
      }
    }
    return;
  }

  const toggle = target.closest(".dice-tray-toggle");
  if (toggle instanceof HTMLButtonElement) {
    const panel = app.querySelector("#dice-tray-panel");
    if (!(panel instanceof HTMLElement)) {
      throw new Error("The dice tray panel is missing.");
    }
    const isOpening = panel.hidden;
    panel.hidden = !isOpening;
    toggle.setAttribute("aria-expanded", String(isOpening));
    return;
  }

  const deleteSessionButton = target.closest("[data-delete-session]");
  if (deleteSessionButton instanceof HTMLButtonElement) {
    const sessionId = deleteSessionButton.dataset.deleteSession;
    const campaignId = deleteSessionButton.dataset.campaignId;
    const feedback = app.querySelector(".session-delete-feedback");
    if (!sessionId || !campaignId || !(feedback instanceof HTMLParagraphElement)) {
      throw new Error("The session note could not be identified for deletion.");
    }
    if (!window.confirm("Delete this session note? This action cannot be undone.")) {
      return;
    }

    try {
      const campaigns = getCampaigns("player");
      const campaign = campaigns.find((item) => item.id === campaignId);
      if (!campaign) {
        throw new Error("The campaign could not be found.");
      }
      const sessions = playerSessions(campaign);
      const sessionIndex = sessions.findIndex((session) => session.id === sessionId);
      if (sessionIndex === -1) {
        throw new Error("The session note could not be found.");
      }

      sessions.splice(sessionIndex, 1);
      campaign.data.sessions = sessions;
      window.localStorage.setItem(campaignStorageKey("player"), JSON.stringify(campaigns));
      window.location.hash = `player/${encodeURIComponent(campaignId)}/notes`;
    } catch (error) {
      feedback.textContent =
        error instanceof Error ? `Could not delete session note: ${error.message}` : "Could not delete session note.";
    }
    return;
  }

  const dieButton = target.closest("[data-die-sides]");
  if (dieButton instanceof HTMLButtonElement) {
    const sides = Number(dieButton.dataset.dieSides);
    const result = app.querySelector(".dice-tray-result");
    const display = app.querySelector(".dice-roll-display");
    const gem = app.querySelector(".dice-roll-gem");
    if (
      !Number.isInteger(sides) ||
      sides < 2 ||
      !(result instanceof HTMLParagraphElement) ||
      !(display instanceof HTMLDivElement) ||
      !(gem instanceof HTMLSpanElement)
    ) {
      throw new Error("The dice tray is missing a valid die or result display.");
    }
    if (dieButton.disabled) {
      return;
    }

    const finalValue = Math.floor(Math.random() * sides) + 1;
    const rollDuration = 900;
    const interval = 70;
    const dieButtons = app.querySelectorAll("[data-die-sides]");
    if (display.classList.contains("is-rolling")) {
      return;
    }
    dieButtons.forEach((button) => {
      if (button instanceof HTMLButtonElement) {
        button.disabled = true;
      }
    });
    display.className = `dice-roll-display dice-roll-display--d${sides} is-rolling`;
    result.textContent = `Rolling d${sides}…`;
    gem.textContent = String(Math.floor(Math.random() * sides) + 1);
    const animationTimer = window.setInterval(() => {
      gem.textContent = String(Math.floor(Math.random() * sides) + 1);
    }, interval);
    window.setTimeout(() => {
      window.clearInterval(animationTimer);
      gem.textContent = String(finalValue);
      display.classList.remove("is-rolling");
      result.textContent = `d${sides} rolled ${finalValue}`;
      dieButtons.forEach((button) => {
        if (button instanceof HTMLButtonElement) {
          button.disabled = false;
        }
      });
    }, rollDuration);
  }
});

const friendsDialog = document.querySelector("#friends-dialog");
const friendsOpenButton = document.querySelector("#friends-open");
const friendsCloseButton = document.querySelector("#friends-close");

if (
  !(friendsDialog instanceof HTMLDialogElement) ||
  !(friendsOpenButton instanceof HTMLButtonElement) ||
  !(friendsCloseButton instanceof HTMLButtonElement)
) {
  throw new Error("The friends dialog is missing required elements.");
}

friendsOpenButton.addEventListener("click", () => {
  renderFriends();
  friendsDialog.showModal();
});
friendsCloseButton.addEventListener("click", () => friendsDialog.close());

friendsDialog.addEventListener("click", (event) => {
  if (event.target === friendsDialog) {
    friendsDialog.close();
    return;
  }

  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  const friendButton = target.closest("[data-friend-id]");
  if (friendButton instanceof HTMLButtonElement) {
    renderFriends(friendButton.dataset.friendId);
    return;
  }

  const removeButton = target.closest("[data-remove-friend]");
  if (removeButton instanceof HTMLButtonElement) {
    const friendId = removeButton.dataset.removeFriend;
    if (!friendId) {
      throw new Error("The friend to remove could not be identified.");
    }
    try {
      const friends = getFriends().filter((friend) => friend.id !== friendId);
      window.localStorage.setItem(friendsStorageKey, JSON.stringify(friends));
      renderFriends();
    } catch (error) {
      renderFriends(friendId);
      const feedback = friendsDialog.querySelector(".friend-thread");
      if (feedback instanceof HTMLElement) {
        feedback.insertAdjacentHTML(
          "afterbegin",
          `<p class="friends-error" role="alert">${escapeHtml(error instanceof Error ? error.message : "Could not remove friend.")}</p>`,
        );
      }
    }
  }
});

friendsDialog.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) {
    return;
  }
  event.preventDefault();

  if (form.matches(".friend-add-form")) {
    const nameField = form.elements.namedItem("name");
    const feedback = form.querySelector(".friend-feedback");
    if (!(nameField instanceof HTMLInputElement) || !(feedback instanceof HTMLParagraphElement)) {
      throw new Error("The add-friend form is missing required fields.");
    }
    const name = nameField.value.trim();
    if (!name) {
      feedback.textContent = "Enter a display name to add a friend.";
      nameField.focus();
      return;
    }
    try {
      const friends = getFriends();
      if (friends.some((friend) => friend.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
        feedback.textContent = "That friend is already in your fellowship.";
        nameField.focus();
        return;
      }
      const friend = {
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
        name,
        messages: [],
      };
      friends.push(friend);
      window.localStorage.setItem(friendsStorageKey, JSON.stringify(friends));
      renderFriends(friend.id);
      document.querySelector("#friend-message")?.focus();
    } catch (error) {
      feedback.textContent = error instanceof Error ? `Could not add friend: ${error.message}` : "Could not add friend.";
    }
    return;
  }

  if (!form.matches(".friend-message-form")) {
    return;
  }
  const messageField = form.elements.namedItem("message");
  const feedback = form.querySelector(".friend-feedback");
  const friendId = form.dataset.friendId;
  if (
    !(messageField instanceof HTMLTextAreaElement) ||
    !(feedback instanceof HTMLParagraphElement) ||
    !friendId
  ) {
    throw new Error("The message draft form is missing required fields.");
  }
  const text = messageField.value.trim();
  if (!text) {
    feedback.textContent = "Write a message before saving the draft.";
    messageField.focus();
    return;
  }
  try {
    const friends = getFriends();
    const friend = friends.find((item) => item.id === friendId);
    if (!friend) {
      throw new Error("The friend could not be found.");
    }
    friend.messages.push({
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
      text,
      sentAt: new Date().toISOString(),
    });
    window.localStorage.setItem(friendsStorageKey, JSON.stringify(friends));
    renderFriends(friendId);
    document.querySelector("#friend-message")?.focus();
  } catch (error) {
    feedback.textContent = error instanceof Error ? `Could not save message draft: ${error.message}` : "Could not save message draft.";
  }
});

const settingsDialog = document.querySelector("#settings-dialog");
const settingsOpenButton = document.querySelector("#settings-open");
const settingsCloseButton = document.querySelector("#settings-close");
const settingsTabs = [...document.querySelectorAll(".settings-tab")];
const settingsPanels = [...document.querySelectorAll(".settings-content")];

if (
  !(settingsDialog instanceof HTMLDialogElement) ||
  !(settingsOpenButton instanceof HTMLButtonElement) ||
  !(settingsCloseButton instanceof HTMLButtonElement) ||
  settingsTabs.length !== 2 ||
  settingsPanels.length !== 2
) {
  throw new Error("The settings dialog is missing required elements.");
}

settingsOpenButton.addEventListener("click", () => settingsDialog.showModal());
settingsCloseButton.addEventListener("click", () => settingsDialog.close());

function activateSettingsTab(activeTab) {
  settingsTabs.forEach((tab, index) => {
    const isActive = tab === activeTab;
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
    settingsPanels[index].hidden = !isActive;
  });
}

settingsTabs.forEach((tab) => {
  tab.addEventListener("click", () => activateSettingsTab(tab));
  tab.addEventListener("keydown", (event) => {
    const currentIndex = settingsTabs.indexOf(tab);
    let nextIndex;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % settingsTabs.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + settingsTabs.length) % settingsTabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = settingsTabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    settingsTabs[nextIndex].focus();
    activateSettingsTab(settingsTabs[nextIndex]);
  });
});

settingsDialog.addEventListener("click", (event) => {
  if (event.target === settingsDialog) {
    settingsDialog.close();
  }
});

settingsDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    settingsDialog.close();
  }
});
