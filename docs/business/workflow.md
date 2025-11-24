# 工作流程
![img_27.png](image%2Fimg_27.png)
## 分支管理

### 分支流程管理
• 从 Master 拉出 RC 分支 (由 Maintainer 执行) @
1. 从 RC 分支拉出 Feat 分支
2. 在 Fork 的个人仓库上的 Feat 分支进行功能开发，向主仓库的 Feat 分支发 MR，review 后合入
3. Feat 分支开发完成后，进行功能测试，通过后，向 RC 发起 MR， review 后由测试合入
4. RC 分支开发完成后，进行合并测试
  1. 未通过，打回 Feat 分支继续修改
  2. 通过后，由测试向 Master 发起 MR 并合入
     • Hotfix 分支从 Master 拉出，修复完成后合回 Master，并同步到 RC
![img_24.png](image%2Fimg_24.png)
### Fork 相关
将主仓库 fork 到自己账号后
拉取个人仓库代码，并将主仓库添加为 upstream
```bash
git clone 个人仓库URL
git remote add upstream 主仓库URL

# 操作完成后可用该命令检查，origin 和 upstream 会各有2个（fetch 和 push）
git remote -v
```
如果本地是clone了主仓库，那么修改一下URL即可
```bash
git remote set-url origin 个人仓库URL
git remote add upstream 主仓库URL

# 操作完成后可用该命令检查，origin 和 upstream 会各有2个（fetch 和 push）
git remote -v

# 然后将本地分支推到origin
git fetch origin
git push origin feat_a
```
### 主仓库新建分支后
从 upstream 主仓库拉取最新分支，并推到 origin 个人仓库，并使用 --set-upstream 参数将该分支与 origin 绑定
```bash
git fetch upstream
git checkout -b feat_a upstream/feat_a
git push --set-upstream origin
```
### MR之前
在发起一个 MR 之前，必须确保自己已同步最新代码，并解决完冲突
```bash
# 先将本地改动推向个人仓库 origin，避免 rebase 操作失误，弄丢了 commit
git push origin

# 这里以feat_a分支举例，实际操作时，是 rebase MR 的目标分支
git fetch upstream

git rebase upstream/feat_a
# rebase 成功，强推回 origin
git push origin -f
```
除了发起 MR 之前，平时闲暇时可以多做该操作，同步越频繁，冲突时压力越小

也可以使用 git merge，两者的区别可参考
https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-%E4%BB%A3%E7%A0%81%E5%90%88%E5%B9%B6%EF%BC%9AMerge%E3%80%81Rebase-%E7%9A%84%E9%80%89%E6%8B%A9

### 开发流程
![img_25.png](image%2Fimg_25.png)
### 进阶
管理好自己的仓库，使用 rebase -i 减少无谓的 commit，可参考
https://www.ruanyifeng.com/blog/2015/08/git-use-process.html


## 前端开发规范lint
lint eslint commitLint stylelint

## 发版
![img_26.png](image%2Fimg_26.png)
