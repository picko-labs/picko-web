# commit-draft

Claude · Cursor **공통 절차**. Rule/command는 본 문서를 **라우트**합니다.

## 목적

`docs/git-convention.md` 규칙을 적용해 picko-web 커밋 메시지 초안을 작성한다.

## 실행 단계

1. `git status` · `git diff --stat` (필요 시 `git diff`) 로 변경 범위 파악
2. `.env.local` 등 시크릿이 staged 이면 **커밋 제외** 경고
3. type 결정: `feat` · `fix` · `refactor` · `chore` · `docs` · `test`
4. 제목: **≤50자 한국어**, **마침표 없음**, `<type>: <제목>`
5. 본문: *왜* 변경했는가 (선택). UI copy 변경 시 **English 유지** (`docs/LANGUAGE.md`)
6. HEREDOC `git commit` 명령 제시
7. 사용자가 **「commit 해줘」** 등 **명시 요청**할 때만 git 실행 — 그 외 초안만

## 절대 금지

- `Co-Authored-By:` 등 트레일러
- 제목 50자 초과 · 끝 마침표
- 제목 전체 영어 (기술 용어만 영어 허용)

## 출력 포맷

```markdown
**제안 커밋 메시지**

\`\`\`
<type>: <≤50자 한국어 제목>

<선택: 본문>
\`\`\`

**실행 명령**

\`\`\`bash
git commit -m "$(cat <<'EOF'
<위와 동일 메시지>
EOF
)"
\`\`\`
```

## picko-web 참고

- 레이어: `app/` · `components/features/` · `lib/api/` · `lib/queries/` · `lib/i18n/`
- 제품 UI: **English** · 커밋·PR: **한국어**
- 에이전트 운영: `docs/AI-AGENTS.md`
