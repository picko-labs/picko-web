# commit-draft (Git 워크플로)

Claude · Cursor **공통 절차**. Rule/command는 본 문서를 **라우트**합니다.

전체 워크플로: **브랜치 생성 → 커밋 제안 → 사람 확인 → 커밋 실행 → PR 생성 → 사람 병합**

---

## 1단계: 브랜치 생성 (에이전트)

작업 시작 시 현재 브랜치가 `main`이면 새 브랜치를 생성한다.

```bash
git checkout -b <type>/<kebab-case-설명>
```

브랜치 type: `feat` · `fix` · `refactor` · `chore` · `docs` · `test`

---

## 2단계: 커밋 제안 (에이전트)

변경이 완료되면 **초안만** 제시하고 대기한다. **절대 실행하지 않는다.**

1. `git status` · `git diff --stat` 로 변경 범위 파악
2. `.env.local` 등 시크릿이 staged이면 **커밋 제외 경고 후 중단**
3. type 결정 → 제목 **≤50자 한국어, 마침표 없음**, `<type>: <제목>`
4. 본문: *왜* 변경했는가 (선택)
5. 아래 포맷으로 출력 후 **사용자 확인 대기**

```markdown
**제안 커밋 메시지**

\`\`\`
<type>: <제목>

<선택: 본문>
\`\`\`

커밋할까요?
```

---

## 3단계: 사람 확인 (수동)

사용자가 **명시적으로 승인**해야 다음 단계로 진행한다.

| 진행 가능 | 진행 불가 |
|-----------|-----------|
| "커밋해줘", "진행해", "ㅇㅇ", "응", "맞아" | 이전 대화의 암묵적 동의, 모호한 문맥 |

확인 문구가 모호하면 **재확인 요청**. 임의 진행 금지.

---

## 4단계: 커밋 실행 (에이전트)

확인 직후 실행한다.

```bash
git add <파일>
git commit -m "$(cat <<'EOF'
<승인된 메시지>
EOF
)"
```

---

## 5단계: PR 생성 (에이전트)

커밋 완료 직후 자동으로 PR을 생성한다.

```bash
git push -u origin HEAD
gh pr create --title "<커밋 제목과 동일>" --body "$(cat <<'EOF'
## Summary
- <변경 요약>

## Test plan
- [ ] npm run dev / build 통과
- [ ] 관련 화면 수동 확인
EOF
)"
```

PR 제목 = 커밋 제목 규칙과 동일 (한국어, ≤50자).

---

## 6단계: 병합 (수동)

GitHub에서 사람이 직접 병합한다. 에이전트는 병합하지 않는다.

---

## 절대 금지

- 사용자 확인 없이 `git commit` / `git push` 실행
- 확인이 모호할 때 임의로 진행
- `Co-Authored-By:` 등 트레일러
- 제목 50자 초과 · 끝 마침표
- `main` 직접 커밋

---

## picko-web 참고

- 레이어: `app/` · `components/features/` · `lib/api/` · `lib/queries/`
- 제품 UI: **English** · 커밋·PR: **한국어**
- 컨벤션 전체: `docs/git-convention.md`
