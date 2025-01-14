package tree_sitter_modu_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_modu "github.com/learnmodu/modu-lsp/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_modu.Language())
	if language == nil {
		t.Errorf("Error loading Modu grammar")
	}
}
