package services

import (
	"crypto/md5"
	"crypto/sha1"
	"crypto/sha512"
	"encoding/hex"
)

type EnctyptionService struct{}

func (service *EnctyptionService) EncryptString(str string, cryptType string) (hashedStr string) {

	switch cryptType {
	case "sha512":
		h := sha512.New()
		h.Write([]byte(str))
		hashedStr = hex.EncodeToString(h.Sum(nil))
	case "sha1":
		h := sha1.New()
		h.Write([]byte(str))
		hashedStr = hex.EncodeToString(h.Sum(nil))
	case "md5":
		h := md5.New()
		h.Write([]byte(str))
		hashedStr = hex.EncodeToString(h.Sum(nil))
	}

	return hashedStr

}
