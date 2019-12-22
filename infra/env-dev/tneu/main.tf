provider "aws" {
  region  = "us-east-1"
  version = "~> 2.0"
  profile = "vlad"
}

terraform {
  backend "s3" {
    acl     = "private"
    bucket  = "vladholubiev-tf-state"
    key     = "env-dev/tneu/main.tfstate"
    encrypt = "true"
    region  = "eu-central-1"
    profile = "vlad"
  }
}
