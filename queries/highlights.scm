;; highlighting for Modu

(define modu-highlights
    (list
        ;; keywords and operators
        (highlight '("let" "fn" "if" "else" "return" "print" "input") 'keyword)
        (highlight '("+" "-" "==" "!=" "=") 'operator)

        ;; types
        (highlight (string) 'string)
        (highlight (number) 'constant.numeric)

        ;; separators
        (highlight '("{" "}" "(" ")" ";" ",") 'punctuation)
        (highlight (comment) 'comment)
    )
)
