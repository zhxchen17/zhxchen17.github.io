+++
title = "Jet 语言的设计 零"
author = ["zhxchen17"]
date = 2018-01-30
tags = ["single", "toml"]
categories = ["cat1", "cat2"]
draft = true
+++

_**声明** Jet语言是一个玩具语言。请不要相信设计者的任何论断，因为设计者自己不知道的东西老多了。_

_**声明2** 文章中会不加证明地给出一组结论，均属个人观点。_


## 问题的边界 {#问题的边界}

随着时代的进步，社会的发展，人民对编程语言的要求日益提高。我们可浅薄地把计算机科学中研究的问题粗略归结为四大类

1.  Software Engineering 软件工程
2.  Data Science 数据科学
3.  Computer Systems 计算机系统
4.  Theory 理论

对于每一个分类，我们都可以列举出目前足够“好”的语言来编写相应的程序来描述或解决在生产中遇到的问题

1.  Java, C#, Ruby ...
2.  Python, Scala ...
3.  C, C++, Rust ...
4.  Haskell, ML, Lisp, Pseudo Code ...

从不同的问题聚集了不同的使用人群这一点我们可以看出，对语言的纵向比较没有特别显著的意义，因为不同的语言
特性本身存在的意义是为了解决不同特征的问题。而过度的建模又会使语言丧失足够的表达力。但是如果不对语言进行
足够的“特化”，就会出现如下这类让普通人摸不着头脑的代码

<div class="code" data-lang="lisp">
  <div></div>

```nil
(define mul
  (lambda (x y)
    ;; mat-sca-mul multiplies a matrix by a scalar.
    (define mat-sca-mul
       (lambda (m x)
          (let* ((nr (matrix-rows m))
                 (nc (matrix-columns m))
                 (r  (make-matrix nr nc)))
             (do ((i 0 (+ i 1)))
                 ((= i nr) r)
                 (do ((j 0 (+ j 1)))
                     ((= j nc))
                     (matrix-set! r i j
                        (* x (matrix-ref m i j))))))))
```
</div>


## Jet要解决的问题 {#jet要解决的问题}

TODO implicit state problem
TODO expression problem
TODO resource management problem
